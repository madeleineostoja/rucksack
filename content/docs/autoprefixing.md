---
title: "Automatic Prefixing"
anchor: "autoprefixing"
weight: 13
addon: true
---
Rucksack comes with the option to run your code through [Autoprefixer](https://github.com/postcss/autoprefixer). Autoprefixer automatically applies relevant vendor prefixes based on current browser popularity and property support (from [CanIUse](http://caniuse.com/)).

This is an optional add-on, and can be toggled on or off with the `autoprefixer` option, passed to Rucksack on initialization. By default autoprefixer is set to `false`.

```javascript
var rucksack = require('rucksack-css');

// Set in build tool, etc.
rucksack({
  autoprefixer: true
});
```

## Prefixing
Head over to [CanIUse](http://caniuse.com) to see what kind of prefixes will be applied for various properties.
```css
.foo {
  display: flex
}
```

```css
.foo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}
```

## Cleaning
Autoprefixer also cleans your code of old, unnecessary vendor prefixes.
```css
.foo {
  -webkit-border-radius: 5px;
          border-radius: 5px;
}
```
```css
.foo {
  border-radius: 5px;
}
```
