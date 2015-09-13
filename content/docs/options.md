---
title: "Options"
anchor: "options"
weight: 1
---

Rucksack is fully modular, you can turn any of its features on or off to customize it to your needs. Just pass the feature name and a boolean during initialization in your build tool. By default core features are set to `true`, and optional addons are set to `false`.

For example:

```javascript
// Set in build tool
.rucksack({
  clearFix: false,
  fallbacks: true
});
```

## Core feature toggles
All default to `true`.

- [`responsiveType`](#responsive-type)

- [`shorthandPosition`](#shorthand-position)

- [`quantityQueries`](#quantity-pseudo)

- [`alias`](#alias)

- [`inputPseudo`](#input)

- [`clearFix`](#clearfix)

- [`fontPath`](#font-src)

- [`hexRGBA`](#hexrgba)

- [`easings`](#easings)

## Addon toggles
All default to `false`.

- [`fallbacks`](#fallbacks)

- [`autoprefixer`](#autoprefixing)
