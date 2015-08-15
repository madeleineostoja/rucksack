---
title: "Input Pseduo-Elements"
anchor: "input"
weight: 5
---
Rucksack adds new pseudo-elements that allow you to easily style the inner elements of HTML5 inputs across browsers.

Note that the rules in the output generated (see below) are duplicated/ungrouped because if a browser finds a single selector it doesn't understand in a group, the whole group is ignored (see [Selectors Level 3](http://www.w3.org/TR/selectors/#Conformance)).

## Placeholders
Style placeholders with the `::placeholder` pseudo-element. It can be applied to any input element, or at the root of your stylesheet for global styling.

Input
```css
input::placeholder {
  color: black;
  opacity: 0.8;
}
```
Output
```css
input::-webkit-input-placeholder {
  color: black;
  opacity: 0.8;
}

input:-moz-placeholder {
  color: black !important;
  opacity: 0.8;
}

input::-moz-placeholder {
  color: black !important;
  opacity: 0.8;
}

input:-ms-input-placeholder {
  color: black !important;
  opacity: 0.8;
}
```

The `!important` flag is automatically applied to `color` declerations on Firefox and IE, since it is needed to overcome defaults in those browsers.

## Range Elements
Style the notoriously tricky range input with `::track` and `::thumb`. Track targets the 'line', while thumb targets the 'button'. They can be applied to any range element, or at the root of your stylesheet for global styling.

Input
```css
input[type="range"]::track {
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::thumb {
  background: #4286be;
  width: 16px;
  height: 8px;
}
```
Output
```css
input[type="range"]::-webkit-runnable-track {
  -webkit-appearance: none !important;
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-moz-range-track  {
  -moz-appearance: none !important;
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-ms-track  {
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  background: #4286be;
  width: 16px;
  height: 8px;
}

input[type="range"]::-moz-range-thumb {
  -moz-appearance: none !important;
  background: #4286be;
  width: 16px;
  height: 8px;
}

input[type="range"]::-ms-thumb {
  background: #4286be;
  width: 16px;
  height: 8px;
}
```

The `-webkit-appearance: none;` and `-moz-appearance: none;` declarations are added to the elements so that your custom styles are properly applied.
