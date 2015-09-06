---
title: "Options"
anchor: "options"
weight: 1
---

Rucksack is fully modular, you can turn any of its features on or off to customize it to your needs. Just pass the feature name and a boolean during initialization in your build tool. By default all features are set to `true`.

For example:

```javascript
// Set in build tool
.rucksack({
  clearFix: false,
  fallbacks: false
});
```

## Available feature toggles:

- [`responsiveType`](#responsive-type)

- [`shorthandPosition`](#shorthand-position)

- [`quantityQueries`](#quantity-pseudo)

- [`alias`](#alias)

- [`inputPseudo`](#input)

- [`clearFix`](#clearfix)

- [`fontPath`](#font-src)

- [`hexRGBA`](#hexrgba)

- [`easings`](#easings)

- [`fallbacks`](#fallbacks)

- [`autoprefixer`](#autoprefixing)
