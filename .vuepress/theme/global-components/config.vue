<template>
  <tabs :options="{ useUrlFragment: false }">
    <tab v-if="php" id="config-php" name="PHP">
      <config-php :values="value" />
    </tab>
    <tab v-if="json" name="JSON">
      <config-json :values="value" />
    </tab>
    <tab v-if="env" name="Environment Vars">
      <div class="custom-block warning">
        <p class="custom-block-title">Warning</p>
        <p>
          In order to use evironment variables,
          <code>DIRECTUS_USE_ENV=1</code> should set. All configuration files will be ignored in this case.
        </p>
      </div>
      <config-env :values="value" />
    </tab>
  </tabs>
</template>

<script>
import configs from "../../data/config.json";
export default {
  props: {
    group: {
      type: String,
      required: true
    },
    php: {
      type: Boolean,
      default: true
    },
    json: {
      type: Boolean,
      default: true
    },
    env: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    value() {
      return configs.find(group => group.id === this.group);
    }
  }
};
</script>