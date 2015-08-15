---
title: "Shorthand Positioning"
anchor: "shorthand-position"
weight: 2
---
Rucksack brings the shorthand methods used by margin and padding to position offsets. The same syntaxes apply

```css
- position: [position] [all];
- position: [position] [y] [x];
- position: [position] [top] [x] [bottom];
- position: [position] [top] [right] [bottom] [left];
```

## Input
```css
.foo {
  position: absolute 0;
}

.bar {
  position: relative 20% auto;
}

.baz {
  position: fixed 0 20px 10px;
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

.baz {
  position: fixed;
  top: 0;
  right: 20px;
  bottom: 10px;
  left: 20px;
}
```
