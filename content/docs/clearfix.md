---
title: "Native Clearfix"
anchor: "clearfix"
weight: 6
---
Rucksack bundles up common clearfix methods into native methods of the `clear` property. A 'clearfix' is a method of making a parent element self-clear it's children, so floats are contained.

Two new methods are added, `fix` and `fix-legacy`. Both achieve the same outcome, with different levels of browser support. `fix` outputs cleaner code and is all that is needed for IE8+, `fix-legacy` support IE6/7.

## Input
```css
.foo {
  clear: fix;
}

.bar {
  clear: fix-legacy;
}
```

## Output
```css
/* fix */
.foo:after{
  content: '';
  display: table;
  clear: both;
}

/* fix-legacy */
.bar:before,
.bar:after {
  content: '';
  display: table;
}
.bar:after {
  clear: both;
}
.bar {
  zoom: 1;
}
```
