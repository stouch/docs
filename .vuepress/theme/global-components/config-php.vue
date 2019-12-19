<template>
  <div>
    <prism language="php">{{code}}</prism>
  </div>
</template>

<script>
import { objectFromArray, setDeepestValue } from "../../utils";
export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  computed: {
    object() {
      const obj = objectFromArray(this.values.path.slice(1));
      setDeepestValue(
        obj,
        this.values.variables
          .map(variable => ({
            [variable.name]: variable.value
          }))
          .reduce((prev, curr) => Object.assign(prev, curr), {})
      );
      return obj;
    },
    code() {
      const code = JSON.stringify(this.object, null, 2)
        .replace(/{/g, "[")
        .replace(/}/g, "]")
        .replace(/":/g, '" =>');
      return `<?php\nreturn ${code};`;
    }
  }
};
</script>