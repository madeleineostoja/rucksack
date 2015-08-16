---
title: "Legacy Fallbacks"
anchor: "fallbacks"
weight: 11
addon: true
---
Rucksack can automatically provide fallbacks for many properties on old browsers, making legacy support a breeze.

This is an optional add-on, and can be toggled on or off with the `fallbacks` option, passed to Rucksack on initialization. By default fallbacks is set to `true`.

```javascript
var rucksack = require('rucksack-css');

// Set in build tool, etc.
rucksack({
  fallbacks: true
});
```


## Opacity
Generates the appropriate ms filter for achieving transparencies on IE8.

```css
.foo {
  opacity: 0.8;
}
```
```css
.foo {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  opacity: 0.8;
}
```

## RGBA
Generates a hexidecimal fallback to `rgba()` for <IE8

```css
.foo {
   background: rgba(153, 221, 153, 0.8);
}
```
```css
.foo {
  background: #99DD99;
  background: rgba(153, 221, 153, 0.8);
}
```

## Pseudo elements
Converts `::pseudo` elements to the CSS2-friendly single-colon style.

```css
.foo::before {
  content: '';
  color: blue;
}
```
```css
.foo:before {
  content: '';
  color: blue;
}
```

## vmin
Creates a `vm` fallback to the `vmin` unit for IE9

```css
.foo {
  width: 50vmin;
}
```
```css
.foo {
  width: 50vm;
  width: 50vmin;
}
```
