---
title: "Quanitity Pseudo-Selectors"
anchor: "quantity-pseudo"
weight: 6
---
Rucksack adds psuedo-selectors to select and style elements based on their quantity. Use them to build super powerful, responsive, content-driven designs.

## :at-least
Applies if there are a certain number of items or more
```css
li:at-least(4) {
  color: blue;
}
```

## :at-most
Applies if there are a certain number of items or less
```css
li:at-most(4) {
  color: blue;
}
```

## :between
Applies to all items between a certain range
```css
li:between(4, 6) {
  color: rebeccapurple;
}
```

## :exactly
Applies when there are exactly a number of items

Target exactly count items:
```css
li:exactly(4) {
  color: rebeccapurple;
}
```

## How it works
The quanitity based pseudo-selectors style elements based on their sibling count, using constructions like:

```css
li:nth-last-child(n+4),
li:nth-last-child(n+4) ~ li
```

For a more in-depth look at how this works and how to take advantage of it's awesome power in your designs, read the recent article on A List Apart - [Quantity Queries for CSS](http://alistapart.com/article/quantity-queries-for-css).
