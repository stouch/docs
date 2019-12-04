# Asset Generator

> The Directus Asset Generator dynamically returns custom thumbnails upon request

## Configuration

The asset whitelist is managed within the project's _Global Settings_ and are stored in the `directus_settings` collection. Each whitelist row consists of five fields:

* **Key**: A unique name to to make accessing thumbnails easier
* **Width**: The width of the image in pixels
* **Height**: The height of the image in pixels
* **Quality**: The image compression (`0-100`)
* **Fit**: Supports two options:
  * `crop` images to the exact requested width/height
  * `contain` images within the requested width/height (maintains aspect ratio)

:::tip
Images are never stretched or distorted even when changing the aspect ratio.
:::

::: warning
Removing all options from the Asset Whitelist will allow *any* assets to be dynamically generated. This might allow malicious users to flood your storage with unwanted generated assets.
:::

## Requesting Assets

Generating and fetching thumbnails is as easy as requesting them using the following URL syntax:

```
example.com/<project-name>/assets/<private_hash>?<query>
example.com/thumper/assets/pnw7s9lqy68048g0?w=200&h=200&f=crop&q=80
example.com/thumper/assets/pnw7s9lqy68048g0?key=card
```

::: tip
You can easily request whitelisted thumbnails using their key. When a key isn't provided as a URL parameter, you must provide all four other parameters in order to match the whitelist.
Example: `example.com/<project-name>/assets/<private_hash>?key=<key>`
:::

## Asset Storage

These locations can be configured, but below we show the default locations when using the `local` storage adapter out-of-the-box.

### Original

```
example.com/uploads/<project-name>/originals/<filename_disk>
example.com/uploads/thumper/originals/a88c3b72-ac58-5436-a4ec-b2858531333a.jpg
```

### Generated Asset

```
example.com/uploads/<project-name>/generated/<query>/<id>
example.com/uploads/thumper/generated/h200,w200,fcrop,q80/a88c3b72-ac58-5436-a4ec-b2858531333a.jpg
```

::: tip
When a user downloads a file from the Asset Generator, it's file name is dynamically updated to the value of `directus_files.filename_download`.
:::

## Examples

Below are a few thumbnail examples that show possible output of the Asset Generator.

### Original File Used Below — 602KB and 1800x1200

![Original File](../img/asset-generator/original.jpg)

### Crop vs Contain

As you can see from the examples below, the contained thumbnail has maintained its aspect ratio and has simply been shrunk to fit within the 200x200 bounds.

| Crop | Contain |
|------|------|
| ![Crop](../img/asset-generator/200-200-crop-75.jpg)<br>_8KB • 200x200_ | ![Contain](../img/asset-generator/200-200-contain-75.jpg)<br>_6KB • 200x133_ |

### Quality vs Filesize

The quality parameter can be any integer from `0-100`. Qualities closer to `0` have more compression artifacts therefore poor image quality, but lower filesizes. Values closer to `100` have less compression and better image quality, but larger filesizes. Below are four possible qualities (200x200 crop) to visually compare the balance between compression and filesize.

| 25% | 50% | 75% | 100% |
|------|------|--------|------|
| ![25%](../img/asset-generator/200-200-crop-25.jpg)<br>_4KB_ | ![50%](../img/asset-generator/200-200-crop-50.jpg)<br>_6KB_ | ![75%](../img/asset-generator/200-200-crop-75.jpg)<br>_8KB_ | ![100%](../img/asset-generator/200-200-crop-100.jpg)<br>_38KB_ |