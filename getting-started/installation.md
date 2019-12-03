# ⚙️ Installation

> The easiest way to get up-and-running is with the [Directus Suite](https://github.com/directus/directus), which includes the [Directus API](https://github.com/directus/api), the [Directus App](https://github.com/directus/app), and all dependencies.

## Requirements

Directus is developed and tested on the LAMP stack, and therefore this is the only officially supported environment. Alternate stacks (NGINX, Caddy, MariaDB, Percona, etc) may also work but you should proceed at your own risk. Please ensure your server meets the following requirements:

* **Apache**
* **MySQL 5.7+**
    * A Database (empty or existing)
    * A Database User (with access to database)
* **PHP 7.1+**
    * Extensions:  `pdo`, `mysql`, `curl`, `gd`, `fileinfo`, `libapache2-mod-php` and `mbstring`

::: tip Alternate SQL Vendors
In theory, Directus should work with MySQL drop-in alternatives such as MariaDB (`10.2+`) or Percona Server. However, these are *not* officially supported so you should proceed at your own risk.
:::

::: tip Detailed Requirements
View our [detailed requirements page](/advanced/requirements.md) to learn more about these requirements, necessary permissions, and other server-specific prerequisites.
:::

## Setup

Running the following `git` command from your server's command line is the preferred method of installing the platform.

```bash
git clone https://github.com/directus/directus.git
```

::: tip Other Install Methods
Alternatively, you can choose from one of these other installation methods.
* [Docker](/advanced/other-install-methods.md#docker)
* [Zip, Tar, or FTP](/advanced/other-install-methods.md#manual)
* [Source](/advanced/other-install-methods.md#source)
:::

::: tip
If you are using Apache, make sure `mod_rewrite` and `AllowOverride` are enabled. [Read more](/advanced/server-setup.md#apache)
:::

## Configure

1. Set your document root to the `/public` directory
2. Navigate your browser to the App at `/admin`
3. Follow the prompts to complete configuration (see below)

Field          | Description
:------------- | :-----------
Project Name   | The name of your project
Project Key    | The key that will be used in the API endpoints
Admin Email    | The email address of your first administrator
Admin Password | The password for your first administrator
Host           | The server/host of your database
Port           | The port for the database (default is 3306)
Database User  | The database user
Database Password | The database user's password
Database Name  | The name of the database
Database Type  | As of now, Directus only supports MySQL

:::tip Manual Configuration
Alternatively, you can [manually configure Directus](/advanced/api/configuration.md).
:::

## Logging In

Once you've completed the installer you will automatically be taken to the login page of the Directus App. You can then login with the credentials you provided during configuration.

---

👍 You've successfully installed Directus! Now you're ready to [add your first collection](/guides/collections.md).
