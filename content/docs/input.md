---
title: "Input Pseduo-Elements"
anchor: "input"
weight: 5
---
Rucksack adds new pseudo-elements that allow you to easily style the inner elements of HTML5 inputs across browsers. Currently the only element supported is the range input (and `::placeholder` if you enable automatic vendor prefixing), more will be added as browser vendors open up their APIs.

Note that the rules in the output generated (see below) are duplicated, since if a browser finds a single selector it doesn't understand in a group the whole group is ignored (see [Selectors Level 3](http://www.w3.org/TR/selectors/#Conformance)).

## Placeholders
Via [automatic prefixing](#autoprefixing).

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
  color: black;
  opacity: 0.8;
}

input::-moz-placeholder {
  color: black;
  opacity: 0.8;
}

input:-ms-input-placeholder {
  color: black;
  opacity: 0.8;
}

input::placeholder {
  color: black;
  opacity: 0.8;
}
```

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
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-moz-range-track  {
  -moz-appearance: none;
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-ms-track  {
  background: #9d9d9d;
  height: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #4286be;
  width: 16px;
  height: 8px;
}

input[type="range"]::-moz-range-thumb {
  -moz-appearance: none;
  background: #4286be;
  width: 16px;
  height: 8px;
}

input[type="range"]::-ms-thumb {
  background: #4286be;
  width: 16px;
  height: 8px;
}
input[type="range"] {
  -webkit-appearance: none;
}
```

The `-webkit-appearance: none;` and `-moz-appearance: none;` declarations are added to relevant elements so that your custom styles are properly applied. Note that this means that for webkit (Chrome, etc) you must style _both_ `::track` and `::thumb`, since the appearance must be set on the root element.
