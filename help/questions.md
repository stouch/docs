# 💬 Frequently Asked Questions

> Below are questions that are commonly asked by people working with Directus. If you can't find an answer, you can post questions to [StackOverflow](https://stackoverflow.com/questions/tagged/directus) or reach out to the members of our [Slack](https://directus.chat) community!

::: warning Premium Support
Due to the enormous number of people using Directus, our Core Team can only provide support to paying Directus Cloud customers or clients who purchase support hours.
:::

### My relational data/file is only returning an ID

Please note the following two things:

1) Directus allows you to request specific field data at different depths. You can use the [`fields` parameter](../api/reference.md#fields) to fetch deeper relationships fields (eg: `?fields=*.*.*` for three levels deep) or even specific fields to keep things as performant as possible (eg: `?fields=image.title` for a relational image's title).

2) Ensure you have the correct correct read permissions for the table your related data is in. By default, Directus makes reading collections private and you will need to enable read permission for the tables you'd like to be able to read.

:::tip
If you're making an unauthenticated request, and expecting to see files, you might want to open up `directus_files` to the `public` role. Be aware, this may allow advanced users to list all files.
:::

## I can't login to the demo

We maintain two online demos: [latest release](https://directus.app) (stable) and [latest commit](https://nightly.directus.app) (nightly), to access either of these demos, you can use the credentials: `admin@example.com` and `password`.

Occasionally people may login and change the passwords on these accounts, we're sorry about this, both of our demos reset each hour so if things look a little screwy, please just wait a bit 

## Can I extend the JWT token?

The JWT Token can't have it's length of validity modified if you need anything more than that, you can either refresh the token to get a new token, or you can utilise the Static tokens, however, static tokens are less secure.

## Will the bin scripts update all my projects?

Running `bin/directus db:upgrade` will only update your default `_` project. You will need to update your custom projects manually.