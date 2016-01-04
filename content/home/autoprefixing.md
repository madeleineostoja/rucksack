---
title: "Automatic Prefixing"
anchor: "autoprefixing"
weight: 12
addon: true
---
```css
.foo {
  transition: all;
}

/* Becomes (from CanIUse) */
.foo {
  -webkit-transition: all;
          transition: all;
}
```
