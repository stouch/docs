# Configuring the API

> Each API project configuration is contained within a dedicated file in the `/config` directory. Additionally, this process adds a boilerplate system schema into the project's database.

::: tip
If you are using Apache, make sure `mod_rewrite` and `AllowOverride` are enabled. [Read more](/advanced/server-setup.md#apache)
:::

## Project Config Files

Each API instance can manage multiple projects. Each project has its own config, database, and file storage. Any extensions installed in the API will be available for all projects it manages.

Projects can be added with new config files, using this naming convention: `config/{my-project}.php`. Each project's config should point to a dedicated database and unique storage paths. Once configured, the API URL will be scoped to the project, eg: `https://api.example.com/my-project/collections`.

### Private / Public Projects

By default, the API will return all available projects in the API through the `/projects` endpoint. If you would like to prevent a project key from being returned in this endpoint, you can prepend the config file name with `private.` (for example `my-project.php` -> `private.my-project.php`).

Accessing a private project through the app can be done by linking directly to a scoped page (eg `/#/my-project/collections`) or adding the projects query parameter to the path (eg `/#/login?project=my-project`). This will force the app to try to read the project information from the given project. These methods can also be used to pre-select a project from the dropdown.

### Create Config File

Create a copy of [`config/_example.php`](https://github.com/directus/api/blob/master/config/_example.php) and change the name to `config/{my-project}.php`.

### Database Details

Next, update the `database` values with your own:

```php
'database' => [
    'type' => 'mysql',
    'host' => 'localhost',
    'port' => 3306,
    'name' => 'directus_test',
    'username' => 'root',
    'password' => 'root',
    'engine' => 'InnoDB',
    'charset' => 'utf8mb4'
]
```

### Auth Keys

These keys can be anything, but we recommend a “strong” and unique value. They are unique identifiers that ensure your auth tokens are only able to be used within this project.

```
'auth' => [
  'secret_key' => '<secret-authentication-key>',
  'public_key' => '<public-authentication-key>',
  'social_providers' => [ ... ]
```

### Boilerplate System Database

Finally, we must import the Directus system tables and data primer into the database by importing this SQL file: `/src/schema.sql`. With this method, your initial Admin user credentials will be:

* **User:** `admin@example.com`
* **Password:** `password`

## Configure with Script

### Create Config File

```bash
$ bin/directus install:config -n <database-name> -u <mysql-user> -p <mysql-password>
```

### Options

| Name    | Description                                                           |
|---------|-----------------------------------------------------------------------|
| `-h`    | Hostname or IP address of the database server (Default: `localhost`)  |
| `-P`    | Port of the database server (Default: `3306`)                         |
| `-t`    | Type of the database (Default: `mysql`)                               |
| `-n`    | Name of the database                                                  |
| `-u`    | Username for the database connection                                  |
| `-p`    | Password for the database connection                                  |
| `-c`    | Tell to enable or disable CORS (Default: `false`)                     |
| `-e`    | Email used by the Mailer as From/Sender (Default: `admin@example.com`)|
| `-k`    | Name of the project (Default: `_`)                                    |
| `-a`    | Super admin token                                                     |

### Boilerplate System Database

```bash
$ bin/directus install:database
```

### Create Admin User

```bash
$ bin/directus install:install -e <admin-email> -p <admin-password> -t <project-title>
```

#### Options

| Name    | Description                                                           |
|---------|-----------------------------------------------------------------------|
| `-e`    | Email of the Directus user (Default: `admin@example.com`)             |
| `-p`    | Password of the Directus user (Default: `password`)                   |
| `-T`    | Token of the Directus user                   |
| `-t`    | Title of the project (Default: `Directus`)                            |
| `-k`    | Name of the project (Default: `_`)                                    |

