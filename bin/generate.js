#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const https = require("https");
const crypto = require("crypto");
const php = require("php-parser");

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                res.resume();
                reject(new Error(`Request failed with status ${statusCode}`));
                return;
            }

            let data = "";
            res.setEncoding("utf8");
            res.on("data", chunk => (data += chunk));
            res.on("end", () => {
                resolve(data);
            });
        });
    });
}

function generate(file, data) {
    const normalized = Object.values(data).map(group => {
        const { variables, ...others } = group;
        return {
            ...others,
            variables: variables.map(variable => {
                let def = null;
                let { name, type, value } = variable;

                type = type.toLowerCase();
                name = name.replace(/\?/g, "");

                if (value.kind === "array") {
                    def = value.items.map(item => item.value);
                } else if (value.kind === "variable") {
                    def = "<dynamic>";
                } else {
                    def = value.value;
                    if (type == "integer" && typeof def !== "number") {
                        def = parseInt(def);
                    }
                }

                return {
                    name,
                    type,
                    value: def
                    // PHP_VALUE: { ...value }
                };
            })
        };
    });
    fs.writeFileSync(file, JSON.stringify(normalized, null, 2));
}

(async function main() {
    const schema = await fetch(
        "https://raw.githubusercontent.com/directus/api/master/src/core/Directus/Config/Schema/Schema.php"
    );

    const parser = new php({
        parser: {
            php7: true
        }
    });

    function find(ast, predicate) {
        if (!util.isArray(ast)) {
            ast = [ast];
        }
        for (const entry of ast) {
            if (predicate(entry)) {
                return entry;
            }

            if (entry.children) {
                const found = find(entry.children, predicate);
                if (found) {
                    return found;
                }
            }

            if (entry.body) {
                const found = find(entry.body, predicate);
                if (found) {
                    return found;
                }
            }
        }
    }

    const code = parser.parseCode(schema);
    const ret = find(
        code,
        entry =>
            entry.kind === "return" &&
            entry.expr.kind === "new" &&
            entry.expr.what.kind === "classreference" &&
            entry.expr.what.name === "Group"
    );

    if (!ret) {
        throw new Error("return not found");
    }

    const currentGroup = [];
    const groups = {};
    const variables = [];

    function getCurrentGroup() {
        return {
            id: currentGroup.map(g => g.replace(/\?/g, "")).join("."),
            path: JSON.parse(JSON.stringify(currentGroup.map(g => g.replace(/\?/g, ""))))
        };
    }

    function commitVariables() {
        if (!currentGroup.length) {
            return;
        }
        const group = getCurrentGroup();
        if (variables.length) {
            groups[group.id] = groups[group.id] || {
                ...group,
                variables: []
            };
            groups[group.id].variables.push(...variables);
            variables.length = 0;
        }
    }

    function walk(exprs) {
        if (!util.isArray(exprs)) {
            exprs = [exprs];
        }
        for (const expr of exprs) {
            if (expr.kind === "new" && expr.what.name === "Group") {
                commitVariables();
                currentGroup.push(expr.arguments[0].value);
                walk(expr.arguments[1].items);
                commitVariables();
                currentGroup.pop();
            } else if (expr.kind === "new" && expr.what.name === "Value") {
                const name = expr.arguments[0].value;
                const type = expr.arguments[1].offset.name;
                const value = expr.arguments[2];
                variables.push({
                    name,
                    type,
                    value
                });
            }
        }
    }

    walk(ret.expr);
    generate(".vuepress/data/config.json", groups);

    return ret;
})().catch(err => {
    console.error(err.stack);
    console.error("Failed to generate: ", err.message);
});
