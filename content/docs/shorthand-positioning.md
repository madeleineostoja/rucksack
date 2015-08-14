---
title: "Shorthand Positioning"
anchor: "shorthand-position"
weight: 2
---
Rucksack provides the shorthand methods used by margin and padding to positioning properties. The same syntaxes apply

```css
- [position]: [all];
- [position]: [y] [x];
- [position]: [top] [x] [bottom];
- [position]: [top] [right] [bottom] [left];
```

## Input
```css
.foo {
  absolute: 0;
}

.bar {
  relative: 20% auto;
}
```

## Output
```css
.foo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bar {
  position: relative;
  top: 20%;
  right: auto;
  bottom: 20%;
  left: auto;
}
```
