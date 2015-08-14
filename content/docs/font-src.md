---
title: "Font Src Expansion"
anchor: "font-src"
weight: 7
---
Rucksack provides a shortcut method to generate bulletproof `src` sets in `@font-face`, with a new `font-path` property. Just set the path to your font files in `font-path`, and it will output a src set based on the [FontSpring syntax](http://blog.fontspring.com/2011/02/further-hardening-of-the-bulletproof-syntax/). Note that `font-path` must be to the font _file_, not just the directory containing the files.

## Input
```css
@font-face {
  font-family: 'My Font';
  font-path: '/my/font/file';
  font-weight: normal;
  font-style: normal;
}
```

## Output
```css
@font-face {
  font-family: 'My Font';
  src: url("/my/font/file.eot");
  src: url("/my/font/file.eot?#iefix") format('embedded-opentype'),
       url("/my/font/file.woff") format('woff'),
       url("/my/font/file.ttf") format('truetype'),
       url("/my/font/file.svg") format('svg');
  font-weight: normal;
  font-style: normal;
}
```
