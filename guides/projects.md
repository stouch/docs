# Projects

> Each project represents a database. Projects can be used to organize different application schemas or environments.

## Multitenancy

Directus allows for one instance of the API/App to manage any number of project databases. Each project has its own database and is configured in its dedicated API config file, where all options can be configured.

::: tip
[View all project options available within the API configuration.](/advanced/api/configuration.html#config-file-options)
:::

::: tip
[Learn how to connect to your different project APIs.](/api/reference.html#project-prefix)
:::

## Creating a New Project

1. Create a new database and database user
1. Run the Directus Installer by going to `/admin/#/install` in your Directus installation

## Deleting a Project

As of now, this can only be done manually.

1. Delete the project's database
1. Delete the project's API config file
1. Delete any files in that project's storage adapter

## Linking to a Project

Since Directus is multitenant, you need a way to link to specific projects. This is accomplished by adding a project query parameter to the login page containing the name of the project you'd lke to login to

```
https://example.com/admin/#/login?project=my-project
```

## Private projects

You might not want to share the existence of the project with the outside world. In that case, you can make a project private by prepending the configuration filename with `private.`. This will hide the project name from the project switcher, and prevents the project name from being returned by the `GET /server/projects` endpoint. User's can still login to this project by using the `project` query parameter mentioned above.

### Example

```
// Before

/config/my-project.php

// After

/config/private.my-project.php
```
