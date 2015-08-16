---
title: "New Default Colors"
anchor: "colors"
weight: 10
addon: true
---
Rucksack automatically replaces default CSS color keywords (blue, red, yellow, etc.) with much nicer alternatives from Google's [Material Design Colors](https://www.google.com/design/spec/style/color.html).

This is an optional add-on, and can be toggled on or off with the `colors` option, passed to Rucksack on initialization. By default color replacement is set to `true`.

```javascript
var rucksack = require('rucksack-css');

// Set in build tool
rucksack({
  colors: true
});
```
