# 🧠 Concepts

> Directus ([duh REKT iss](http://audio.pronouncekiwi.com/Salli/Directus)) is latin for: _laid straight, arranged in lines_. The broadest goal of Directus is to present data in a simple, orderly, and intuitive way.

## Glossary

Definitions and other various terms that are exclusive to the Directus Ecosystem.

### Alias

A field that does not actually map to a database column (eg: a divider or the one side of a relationship).

### Boilerplate

The base schema and system content included in a fresh/blank copy of Directus.

### Client

An external application using data managed by Directus.

### Collection

A Collection is a grouping of similar Items. Each collection represents a table in your database.

### Collection Preset

Also known as a "bookmark", this is a specific view of a collection assigned to an individual user, a role, or global. It includes:

* Search query
* Filters
* View Type
* Sort Field and Direction
* Layout Query (eg: visible fields)
* Layout Options (eg: tabular column widths)

### Datatype

The SQL vendor-specific database storage type (eg: `VARCHAR`, `BIGINT`, etc)

### Display Template

A Mustache-style string used to format field values. For example:

```
{{first_name}} {{last_name}}, {{title}}
```

### Environment

A flag set in the project config: either `production` or `staging` (not to be confused with environment variables).

### Extension

Anything that extends the core codebase, including: Interfaces, Pages, Storage Adapters, SSO Services, and more.

### Field

A Field is a specific type of value within a Collection. For example, you might have _Title_, _Body_, _Author_, and _Date Published_ fields within an _Articles_ collection. Each field is saved as a SQL column or alias.

### Field Type

An extended and agnostic storage type mapped to SQL vendor datatypes (eg: `string`, `number`, etc). Also includes non-DB style types that provide extra functionality into the system (eg `o2m`, `translation`, etc).

### Headless CMS

Directus _only manages content_. Unlike traditional CMS, it doesn't come with a website editor, template designs, or "presentation layer" built-in.

### Instance

An API install managing one or more projects on a server.

### Interface

Interfaces allow for different ways of viewing and interacting with field data. These interfaces are primarily used on the edit form of the Item Detail page, but also render readonly data on the Item Browse page.

### Item

A single record of data. Contains values for the fields. Saved as a SQL row.

### Length

The amount/size of data that can be stored in a database column or Directus field.

### Layout

The presentation of data on the Item Browse page. This could be a listing, tiles, calendar, map, chart, or any other way to showcase data.

### Multitenancy

Every instance of the API has support for multiple projects, and therefore multiple databases, out of the box. These can be used to organize properties, environments, projects, or anything else.

### Note

Descriptive text displayed with a field.

### Project

A database, config, and file storage directory. Also used for deployment environments (eg: `prod`, `stage`, `dev`).

:::tip Reserved Project Names
The following reserved project names can not be used because they represent root-level API endpoints that exist now or may exist in the future:

`server`, `projects`, `interfaces`, `pages`, `layouts`, `types`
:::

### Schema

The SQL database's tables, columns, datatypes, defaults, and other architectual information. This does not include any items or content.

### Telemetry

Directus pings a centralized [Telemetry](https://github.com/directus/telemetry) server to accomplish two things:

1. Retrieve the latest releases from GitHub to inform Admin users when an upgrade is available.
2. Send anonymous metrics used to calculate Directus install count.

### Versionless

The Directus API is "versionless", which means that new releases will only include fixes and improvements, but no deprecations or breaking changes.
