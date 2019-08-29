# Interfaces

> Interfaces determine how a field's value is presented or edited. For example, a _boolean_ value might use a Toggle, Switch, Checkbox, Pill-Box, Icon, or even a Dropdown interface.

## Choosing an Interface

To get started, go to _Settings > Collections & Fields_, choose the Collection you want to add the field to, then click "New Field". The first choice you'll make is what type of interface you want to use — which then determines/limits the subsequent setup options.

## Field Types

Each interface works with one or more field types. For example, the Calendar interface works with the `date` type but not `boolean`. The Text Input is used as a fallback since it works with most field types.

## Interface Options

Interfaces are highly customizable with options that allow you to tailor them to individual uses. These vary depending on interface complexity, with less-common options hidden within an "Advanced" accordion.

## Custom Interfaces

If you need to tailor an interface to your specific needs, or want something completely different, you can create custom interface extensions. [Learn more about that here](/extensions/interfaces.md).

## Core Interfaces

WORK IN PROGRESS — There are a number of interfaces that ship with Directus that cover most use cases out-of-the-box. Below we'll give an overview of each.

### `button-group`
A highly customizable "radio" interface that allows users to select a single option, with its value saved as a string. Options can be text, icons, or both, and can be separated into different groups.
#### Options
* `choices` — JSON that defines the options (text/icon labels), values, and grouping.
* `theme` — Choose between solid and outlined buttons.

### `calendar`
### `checkboxes-relational`
### `checkboxes`
### `code`
### `collections`
### `color-palette`
### `color`
### `date`
### `datetime-created`
### `datetime-updated`
### `datetime`
### `divider`
### `dropdown`
### `file-preview`
### `file-size`
### `file`
### `files`
### `hashed`
### `icon`
### `json`
### `language`
### `many-to-many`
### `many-to-one`
### `map`
### `markdown`
### `multiselect`
### `numeric`
### `one-to-many`
### `password`
### `preview`
### `primary-key`
### `radio-buttons`
### `rating`
### `repeater`
### `slider`
### `slug`
### `sort`
### `status`
### `tags`
### `text-input`
### `textarea`
### `time`
### `toggle-icon`
### `toggle`
### `translation`
### `user-created`
### `user-roles`
### `user-updated`
### `user`
### `wysiwyg-full`
### `wysiwyg`

## System Interfaces

This subset of Core Interfaces were built specifically for use within Directus Settings. Please be aware that these interfaces are ad hoc and might not work well for project content.

### `2fa-secret`
### `activity-icon`
### `interface-options`
### `interfaces`
