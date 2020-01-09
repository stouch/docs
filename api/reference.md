---
title: API Reference
pageClass: page-reference
---

# API Reference

## Introduction

<two-up>

::: slot left

Directus offers both a [RESTful](https://restfulapi.net/) and [GraphQL](https://graphql.org/) API to manage the data in the database. The API has predictable resource-oriented URLs, relies on standard HTTP status codes, and uses JSON for input and output.

The input/output of the API differs greatly for individual installs, as most of the endpoints will return data that's based on your specific schema.
:::

::: slot right
**New to Directus?**

See our [Getting Started](/getting-started/introduction.html) guide if this is your first time working with Directus.
:::

</two-up>

---

## Projects

<two-up>

::: slot left

Directus supports multi-tenancy out of the box. In order to do this, most endpoints will be prefixed with a project key based on the configuration filename.

When installing Directus for the first time, you'll be asked to provide a project key for your project. This is the project key that Directus expects in endpoints that require the `project` attribute.

:::

<info-box title="Example" slot="right">

```
/:project/items/:collection
/:project/activity
/system/info
```

</info-box>
</two-up>

---

## Authentication

<two-up>

::: slot left
By default, all data in the system is off limits for unauthenticated users. To gain access to protected data, you must include an access token with every request.

To make data publicly accessible, you can use [the public role](#).
:::

::: slot right
Token types:
* Session Token
* Static Token

Passing the token:
* Query Parameter
* Authorization Header
:::

</two-up>

---

## Endpoints

### Items

<two-up>

::: slot left
Items are individual pieces of data in your database. They can be anything, from articles, to IoT status checks.

[Open items reference](/api/items.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/items/:collection
   GET /:project/items/:collection
   GET /:project/items/:collection/:id
 PATCH /:project/items/:collection/:id
DELETE /:project/items/:collection/:id
   GET /:project/items/:collection/:id/revisions
   GET /:project/items/:collection/:id/revisions/:offset
 PATCH /:project/items/:collection/:id/revert/:revision
```

</info-box>
</two-up>

### Files

<two-up>

::: slot left
Files can be saved in any given location. Directus has a powerful assets endpoint that can be used to generate thumbnails for images on the fly.

[Open files reference](/api/files.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/files
   GET /:project/files
   GET /:project/files/:id
 PATCH /:project/files/:id
DELETE /:project/files/:id
   GET /:project/files/:id/revisions
   GET /:project/files/:id/revisions/:offset
 PATCH /:project/files/:id/revert/:revision
```

</info-box>
</two-up>

### Activity

<two-up>

::: slot left
All events that happen within Directus are tracked and stored in the activities collection. This gives you full accountability over everything that happens.

[Open activity reference](/api/activity.html)
:::

<info-box title="Endpoints" slot="right">

```http
   GET /:project/activity
   GET /:project/activity/:id
  POST /:project/activity/comment
 PATCH /:project/activity/comment/:id
DELETE /:project/activity/comment/:id
```

</info-box>
</two-up>

### Collections

<two-up>

::: slot left
Collections are the individual collections of items, similar to tables in a database.

Changes to collections will alter the schema of the database.

[Open collections reference](/api/collections.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/collections
   GET /:project/collections
   GET /:project/collections/:collection
 PATCH /:project/collections/:collection
DELETE /:project/collections/:collection
```

</info-box>
</two-up>

### Collection presets

<two-up>

::: slot left
Collection presets hold the preferences of individual users of the platform. This allows Directus to show and maintain custom item listings for users of the app.

[Open collection presets reference](/api/collection-presets.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/collection_presets
   GET /:project/collection_presets
   GET /:project/collection_presets/:id
 PATCH /:project/collection_presets/:id
DELETE /:project/collection_presets/:id
```

</info-box>
</two-up>

### Folders

<two-up>

::: slot left
Folders don't do anything yet, but will be used in the (near) future to be able to group files.

[Open folders reference](/api/folders.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/folders
   GET /:project/folders
   GET /:project/folders/:id
 PATCH /:project/folders/:id
DELETE /:project/folders/:id
```

</info-box>
</two-up>

### Permissions

<two-up>

::: slot left
Folders don't do anything yet, but will be used in the (near) future to be able to group files.

[Open permissions reference](/api/permissions.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/permissions
   GET /:project/permissions
   GET /:project/permissions/:id
   GET /:project/permissions/me
   GET /:project/permissions/me/:collection
 PATCH /:project/permissions/:id
DELETE /:project/permissions/:id
```

</info-box>
</two-up>

### Relations

<two-up>

::: slot left
Folders don't do anything yet, but will be used in the (near) future to be able to group files.

[Open permissions reference](/api/permissions.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/relations
   GET /:project/relations
   GET /:project/relations/:id
 PATCH /:project/relations/:id
DELETE /:project/relations/:id
```

</info-box>
</two-up>

### Revisions

<two-up>

::: slot left
Revisions are individual changes to items made. Directus keeps track of changes made, so you're able to revert to a previous state at will.

[Open revisions reference](/api/revisions.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/relations
   GET /:project/relations
   GET /:project/relations/:id
 PATCH /:project/relations/:id
DELETE /:project/relations/:id
```

</info-box>
</two-up>

### Roles

<two-up>

::: slot left
Roles are groups of users that share permissions.

[Open roles reference](/api/roles.html)
:::

<info-box title="Endpoints" slot="right">

```http
  POST /:project/relations
   GET /:project/relations
   GET /:project/relations/:id
 PATCH /:project/relations/:id
DELETE /:project/relations/:id
```

</info-box>
</two-up>