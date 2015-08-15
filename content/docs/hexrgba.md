---
title: "Hex RGBA Shortcuts"
anchor: "hexgrba"
weight: 8
---
Rucksack provides an easy shortcut to add an alpha channel to any hex color. Just add the hex value you want to convert in place of the RGB value in `rgba()`. The hex is converted to RGB and output as a proper `rgba()` property.

## Input
```css
.foo {
  color: rgba(#fff, 0.8);
}
```

## Output
```css
.foo {
  color: rgba(255,255,255, 0.8);
}
```
