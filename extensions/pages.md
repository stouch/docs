# Pages

> Pages are a way to add full-featured modules to Directus. You can build page modules for custom dashboards, reporting, point-of-sale systems, or anything else. Each page is protected within the auth gateway and can easily access project data and global variables.

## Files & Structure

A Page is made up of at least two core files. You can create a page from scratch or use the [extension toolkit](https://github.com/directus/extension-toolkit) to generate boilerplate code.

If not using the extension toolkit, here's how you can create a page from scratch:
1. Create a meta.json file in `public/extensions/custom/pages`. See below for an example.
2. Write up your page in a .vue file.
3. Transpile the .vue file in the same directory as step #1.
   For example, if using Webpack, [Here's a guide to configuring webpack to compile with vue](https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772).

### `page.vue`

A standard Vue.js single file component that renders the content of the Page extension.

```vue
<template>
  <div class="demo-page">
    <v-header title="Demo Page"></v-header>
    <h1 class="style-0">Just an example...</h1>
    <p>
      This is a Directus Page Extension, you can put anything you want in here.
    </p>
  </div>
</template>

<script>
export default {
  name: "demo-page"
};
</script>

<style lang="scss" scoped>
.demo-page {
  padding: var(--page-padding);

  h1 {
    margin-bottom: 20px;
  }
}
</style>
```

### `meta.json`

The meta.json file contains metadata for the Page, such as its unique name, version, and translations.

```vue
{
  "name": "Demo Page",
  "version": "1.0.0",
  "icon": "person",
  "translation": {}
}
```
