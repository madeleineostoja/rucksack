---
title: "Automatic Prefixing"
anchor: "autoprefixing"
weight: 11
addon: true
---
```css
.foo{
  transition: all;
}

/* Becomes (from CanIUse) */
.foo {
  -webkit-transition: all;
          transition: all;
}
```
