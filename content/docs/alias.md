---
title: "Property Aliases"
anchor: "alias"
weight: 5
---
Rucksack allows you to set aliases for long property names and save some of those precious keystrokes. To set an alias simply add it to the `@alias` rule in the format of `[alias]: [property];`. Aliases can be used anywhere, including inside other properties. Aliases are global in a stylesheet, so it's a good idea to have just a single `@alias` rule in your project and specify all aliases in one place.

## Input
```css
@alias {
  fs: font-size;
  bg: background;
}

.foo {
  fs: 16px;
  transition: bg 200ms ease;
}
```

## Output
```css
.foo {
  font-size: 16px;
  transition: background 200ms ease;
}
```
