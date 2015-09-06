---
title: "Responsive Typography"
anchor: "responsive-type"
weight: 2
---

Create automagical fluid typography with a new `responsive` property on `font-size`. All the type on this site is responsive, resize your browser to see it in action!

![Responsive Type Demo][demo]

## Quick start
Rucksack's responsive typography is fully adjustable, but all you need to get started is to specify `responsive` as a font-size.

```css
.foo {
  font-size: responsive;
}
```

## Specifying parameters
You'll probably want to change those defaults and have some control over the bounds of a font size. The best way to do this is with a new shorthand syntax in `font-size`, and a new property called `font-range`. Font range specifies the viewport widths between which the font size is fluid, outside of this range the font sizes are set to min/max values.

The format of each property is very simple
```css
font-size: responsive [min-font-size] [max-font-size]
font-range: [lower-bound] [upper-bound]
```

For example
```css
html {
  font-size: responsive 12px 21px;
  font-range: 420px 1280px;
}
```

All values can be in `px`, `rem`, or `em`.

## Expanded syntax
You can also specify all of these values with independent properties
```css
html {
  font-size: responsive;
  min-font-size: 12px;
  max-font-size: 21px;
  lower-font-range: 420px;
  upper-font-range: 1280px;
}
```

## Output
Rucksack's responsive typography outputs complex calc and vw based font-sizes, along with media queries to set the range between which a font size is fluid.
```css
html {
  font-size: calc(12px + 9 * ( (100vw - 420px) / 860));
}

@media screen and (max-width: 420px) {
  html {
    font-size: 12px;
  }
}

@media screen and (min-width: 1280px) {
  html {
    font-size: 21px;
  }
}
```

With the calc expression above being equivalent to

```
min-size + (min-size - max-size) * ( (100vw - min-width) / ( max-width - min-width) )
```

## Defaults
To get started you only need to specify `font-size: responsive;`, all other properties have sane defaults.
```css
min-font-size: 14px
max-font-size: 21px
lower-font-range: 420px
upper-font-range: 1280px
```

## Supporting legacy browsers
Rucksack's responsive typography works on all modern browsers (IE9+). Legacy browsers will ignore the output font-size, so it's very easy to provide a static fallback.
```css
html {
  font-size: 16px;
  font-size: responsive;
}
```


[PostCSS]: https://github.com/postcss/postcss
[calc-polyfill]: https://github.com/closingtag/calc-polyfill
[respond]: https://github.com/scottjehl/Respond
[vminpoly]: https://github.com/saabi/vminpoly
[demo]: http://simplaio.github.io/rucksack/img/type-demo.gif
