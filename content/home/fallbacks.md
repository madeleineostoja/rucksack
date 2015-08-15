---
title: "Legacy Fallbacks"
anchor: "fallbacks"
weight: 11
addon: true
---
```css
.foo {
  opacity: 0.8;
}

/* Becomes */
.foo {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  opacity: 0.8;
}
```
