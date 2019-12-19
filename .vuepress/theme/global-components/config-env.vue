<template>
  <table>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
    <tr v-for="variable in variables">
      <td>{{variable.name}}</td>
      <td>{{variable.type}}</td>
      <td>{{variable.value}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  computed: {
    variables() {
      const prefix = this.values.path
        .map(g => g.toUpperCase().replace(/_/g, ""))
        .join("_");
      return this.values.variables.map(variable => ({
        name: `${prefix}_${variable.name.replace(/_/g, "").toUpperCase()}`,
        type: variable.type,
        value: JSON.stringify(variable.value)
      }));
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  display: table;
}
</style>