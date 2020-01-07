# Installing using Docker

If you've worked with Docker a while, you're probably looking for this link: [hub.docker.com/r/directus/directus](https://hub.docker.com/r/directus/directus). If not, here's how you get up and running fast:

[[toc]]

## Step 1: Create a `docker-compose.yaml` file

Add the following:

```yaml
version: "3"
services:
  mysql:
    image: mysql:5.7

    environment:
      MYSQL_DATABASE: "directus"
      MYSQL_USER: "directus"
      MYSQL_PASSWORD: "directus"
      MYSQL_ROOT_PASSWORD: "directus"

    ports:
      - "3306:3306"

  directus:
    image: directus/directus:v8-apache

    ports:
      - "8080:80"

    environment:
      DIRECTUS_APP_ENV: "production"
      DIRECTUS_AUTH_PUBLICKEY: "some random secret"
      DIRECTUS_AUTH_SECRETKEY: "another random secret"
      DIRECTUS_DATABASE_HOST: "mysql"
      DIRECTUS_DATABASE_PORT: "3306"
      DIRECTUS_DATABASE_NAME: "directus"
      DIRECTUS_DATABASE_USERNAME: "directus"
      DIRECTUS_DATABASE_PASSWORD: "directus"

    volumes:
      - ./data/config:/var/directus/config
      - ./data/uploads:/var/directus/public/uploads

    links:
      - mysql:mysql
```

::: tip
When using this in production, please make sure to set the database user and password, and the auth public and secret keys to something more secure.
:::

::: warning
If you already have another service running on port 8080 or 3306, change the values for `ports` in the `docker-compose.yaml` file above.
:::

## Step 2: Pull the latest images

```
docker-compose pull
```

## Step 3: Run the stack

```
docker-compose up -d
```

## Step 4: Initialize the database and an admin user

Wait until Docker is done booting up the stack. You can check this by running `docker ps`. When it's done, run the following command to finish up installation of Directus.

```
docker-compose run directus install --email email@example.com --password d1r3ctu5
```

::: warning
Make sure to substitue `email@example.com` and `d1r3ctu5` with your preferred email and password.
:::
