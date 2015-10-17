---
title: "Legacy Fallbacks"
anchor: "fallbacks"
weight: 12
addon: true
---
Rucksack can pass your styles through [Laggard](https://github.com/seaneking/laggard), which provides legacy fallbacks for many properties, making old browser support a breeze.

This is an optional add-on, and can be toggled on or off with the `fallbacks` option, passed to Rucksack on initialization. By default fallbacks is set to `false`.

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

## Rem units
Creates a `px` fallback to `rem` unit sizing, calculated from the document root (defined in `html`, `:root`, or falling back to `16px`).

```css
.foo {
  font-size: 2rem;
}
```
```css
.foo {
  font-size: 32px;
  font-size: 2rem;
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

## will-change
Inserts a 3D acceleration hack to emulate the `will-change` property, using `backface-visibility`.

```css
.foo {
  will-change: transform;
}
```
```css
.foo {
  backface-visibility: hidden;
  will-change: transform;
}
```
