# 🐰 Welcome to the Directus Docs!

> These Docs will help get you up-and-running quickly, guide you through advanced features, and explain the concepts that make Directus so unique.

## What is Directus?

**Directus is an open-source suite of software that wraps custom SQL databases with a dynamic API and intuitive Admin App.** It allows both administrators and non-technical users to view and manage the content/data stored in pure SQL databases. It can be used as a headless CMS for managing project content, a database client for modeling and viewing raw data, or as customizable WebApp.

### What is a "headless" CMS?

With _traditional_ CMS you choose a design template, throw in some content, and it generates a blog or simple website. However that means that these platforms are limited to websites only, since your designs and content are all jumbled together.

In a "headless" CMS, there are no templates built-in, no design or layout editor, and it doesn't generate a website (aka the "head"). It only manages _content_. That's it. Now that your content is cleanly decoupled, you can connect it anywhere! Websites, sure, but also native apps, kiosks, digital signage, other software, internet-of-things (IoT) devices, or any other data-driven project.

In short: traditional CMS are for small or medium-sized websites, headless CMS can manage content for absolutely anything.

### What is a "database wrapper"?

Our database-wrapper uses the SQL database's schema to dynamically build a set of custom API endpoints based on the custom achitecture. This means you can install it on top of existing databases, tailor actual database tables/columns to specific project requirements, and even build/optimize in the database directly.

Perhaps one of the biggest advantages of using a database-wrapper like ours in your project, is that you always have direct access to your pure and unaltered data. Meaning, you always have the option to bypass our API, SDK, or CMS and connect to your data directly — effectively removing _any_ bottleneck or additional latency.

## Core Principles

Directus is a simple solution for complex problems. Every aspect of Directus is data-first and guided by the following core principles:

* **Agnostic** — Directus is not specific to websites or limited to HTML. Your data is compatible with any platform or device so you can connect it to all of your projects.
* **Extensible** — Directus can not be outgrown. Every aspect of the toolkit is modular, allowing you to adapt, customize, and extend the Core feature-set.
* **Limitless** — Directus does not impose any arbitrary restrictions or limits. Add as many users, roles, locales, collections, items, or environments as you'd like.
* **Open** — Directus is not a closed, obfuscated, or black-boxed system. Its simple codebase public and transparent so you can audit the data flow from end-to-end.
* **Portable** — Directus does not _lock_ you to its platform or services. You can migrate your data elsewhere at any point — or just delete Directus and connect to your database directly.
* **Pure** — Directus does not alter your data or store it in a predefined or proprietary way. All system data is stored elsewhere, never commingled.
* **Unopinionated** — Directus does not impose any self-proclaimed "best practices". It lets you decide how your data is modeled, managed, and accessed.

## The Directus Ecosystem

There are several properties within the Directus ecosystem, below is a brief overview.

### Directus Suite

This is the actual Directus software you would install on your server. It includes the Directus API, Directus Admin App, and all dependencies.

### Directus API

This is the "engine" of Directus, providing a dynamic API for any MySQL database. It is bundled in the Directus Suite. The [codebase](https://github.com/directus/api) is written primarily in PHP and uses Zend-DB for database abstraction.

### Directus Application

This is the admin app that allows non-technical users to manage database content. It is bundled in the Directus Suite, and requires an instance of the Directus API to function. The [codebase](https://github.com/directus/app) is written in Vue.js.


### Directus Cloud

Directus is completely free and open-source, but we also offer a [Content-as-a-Service platform](https://directus.cloud/) to help offset our operating costs. The open-source and hosted versions are identical, but our Cloud service offers faster setup, automatic upgrades, and premium support.

### Directus Docs

This is what you're reading right now. We believe that maintaining great Documentation is just as important as releasing great software. Luckily our docs are all written in markdown in a [public repository](https://github.com/directus/docs) so the community can help!

### Directus Demos

To make it as easy as possible to actually play around with Directus we maintain an online demo: [demo.directus.io](https://demo.directus.io). The demo resets each hour so if things look a little screwy just wait a bit. The credentials for this demo are: `admin@example.com` and `password`.

### Directus Cloud Status

For up-to-date system information you can check our [Status Page](https://status.directus.io). This page provides current and historical incident details, as well as our current 30-day uptime percentage.

### Directus Website

For general information, resources, and team info we maintain a marketing [website](https://directus.io/). This is a good non-technical hub to serve as as introduction to the Directus platform.

### Directus Community

Join our growing community on [Directus Slack](https://directus.chat) (1,600+ members) to get an inside peak into what's happening within our organization. From community support to seeing where the platform is heading next, it's a great way to get more involved!

### Directus Locales

In addition to managing multilingual content, the Directus Admin App itself can also be translated into different langauges. Our locales are managed through the [Directus CrowdIn](https://locales.directus.io/), which provides a friendly interface and automatically submits pull-requests to the git repository.

### Directus Marketplace

Coming in 2020, this will be a library of extensions available for Directus. Eventually we plan on opening this up to community submissions and allowing monetization — but initially it will showcase free extensions created by our core team.
