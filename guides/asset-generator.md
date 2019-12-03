# Asset Generator

> The Directus Asset Generator dynamically returns custom thumbnails upon request

## URL Syntax

Generating and fetching thumbnails is as easy as requesting them using the following URL syntax:

```url
https://example.com/<project>/assets/<private-hash>?w=500&h=500&q=80&f=crop
```

### Request Flow

1. A user requests a thumbnail of a specific Directus file using the URL syntax above
2. The request is routed through an .htaccess file (or nginx equivalent) to the thumbnailer that checks if the thumbnail already exists
3. If it already exists:
    1. **The thumbnail is returned**
4. If it does _NOT_ exist
    1. The requested size is validated against the whitelist
    2. The thumbnail is generated and saved in the filesystem
    3. **The thumbnail is returned**

As you can see, when requesting a thumbnail the end result is the same, all of the heavy-lifting happens automatically behind the scenes.

## Configuration

The whitelist is managed within the project's _Global Settings_ and are stored in the `directus_settings` collection.

Each whitelist row consists of 5 fields:

### Key

A unique name for the asset configuration. This can be used as a shorthand in the URL:

`/<project>/assets/<file-hash>?key=card`

### Width

The width of the image

### Height

The height of the image

### Quality

The compression level of the image

### Fit

Whether to crop the image or to maintain the aspect ratio.

::: tip
When a key isn't provided in the API URL, you have to provide all 4 other params in order to match the whitelist.
:::