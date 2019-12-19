/**
 * Converts an array of strings ["a", "b", ...] into an object {a:{b: ...}
 * @param {Array<String>} arr 
 */
export function objectFromArray(arr) {
    const obj = {};
    arr.reduce((a, b) => (a[b] = {}), obj);
    return obj;
}

/**
 * Sets a value of the deepest object 
 * Example:
 *  setDeepestValue({a:{b:{c:{}}}, 1234); -> {a:{b:{c:1234}}}
 * @param {*} obj 
 * @param {*} value 
 */
export function setDeepestValue(obj, value) {
    function set(obj, value) {
        const keys = Object.keys(obj);
        console.log('keys', keys);
        if (keys.length > 0) {
            obj[keys[0]] = set(obj[keys[0]], value);
        } else {
            return value;
        }
        return obj;
    }
    return set(obj, value);
}