<p align="center">
 <img src="https://rucksackcss.org/img/full-logo.png" alt="rucksack logo" height="325" />
</p>

<p align="center">
  <a href="https://travis-ci.org/simplaio/rucksack"><img src="https://travis-ci.org/seaneking/rucksack.svg?branch=master" alt="Build satus" /></a>
  <a href="https://www.npmjs.com/package/rucksack-css"><img src="https://img.shields.io/npm/dm/rucksack-css.svg" alt="Downloads" /></a>
  <a href="https://npmjs.org/package/rucksack-css"><img src="https://img.shields.io/npm/v/rucksack-css.svg" alt="NPM version" /></a>
</p>

| ℹ️ Rucksack has a successor! |
|:---------------------------|
| **[Satchel](https://www.satchel.style)** is thew new Rucksack, built on CSS-in-JS |

A little bag of CSS superpowers, built on [PostCSS][postcss].

Rucksack makes CSS development less painful, with the features and shortcuts it should have come with out of the box.

**Read the full docs at [rucksackcss.org/docs](https://rucksackcss.org/docs)**

### Contents

- [Install](#install)
- [Features](#features)
    - [Responsive typography](#responsive-typography)
    - [Shorthand positioning syntax](#shorthand-positioning-syntax)
    - [Native clearfix](#native-clearfix)
    - [Automatic font src generation](#automatic-font-src-generation)
    - [Extra input pseudo-elements](#extra-input-pseudo-elements)
    - [Hex shortcuts for RGBA](#hex-shortcuts-for-rgba)
    - [More easing functions](#more-easing-functions)
    - [Quantity pseudo-selectors](#quantity-pseudo-selectors)
- [Addons](#addons)
    - [Autoprefixer](#autoprefixer)
    - [Legacy Fallbacks](#legacy-fallbacks)
- [Usage](#usage)
    - [Gulp](#gulp)
    - [Webpack](#webpack)
    - [Grunt](#grunt)
    - [CLI](#cli)
    - [Javascript API](#javascript-api)
    - [Stylus](#stylus)
- [Options](#options)


## Install

Rucksack is available on NPM under `rucksack-css`


```sh
$ npm i rucksack-css -D
```

## Features

#### Responsive typography

Automagical fluid typography with new `responsive` arguments to `font-size`, `line-height`, and `letter-spacing` properties

```css
.foo {
  font-size: responsive;
}
```

![Responsive Type Demo][type-demo]

#### Shorthand positioning syntax

Use the shorthand syntax from `margin` and `padding` on `position` properties

```css
.foo {
  position: absolute 0 20px;
}
```

#### Native clearfix

Generate bulletproof clearfixes with a new argument on the `clear` property

```css
.foo {
  clear: fix;
}
```

#### Automatic font src generation

Automatically generate `src` sets for `@font-face` based on the path to your font files

```css
@font-face {
  font-family: 'My Font';
  font-path: '/path/to/font/file';
}
```

#### Extra input pseudo-elements

Standardize the unweidly `<input type="range">` element across browsers with new `::track` and `::thumb` pseudo elements

```css
input[type="range"]::track {
  height: 2px;
}
```

#### Hex shortcuts for RGBA

Generate RGBA colors from a hex color + alpha value

```css
.foo {
  color: rgba(#fff, 0.8);
}
```

#### More easing functions

Use a whole library of modern easing functions in transitions and animations

```css
.foo {
  transition: all 250ms ease-out-cubic;
}
```

#### Quantity pseudo-selectors

Create truly responsive designs with powerful content quantity selectors

```css
li:at-least(4) {
  color: blue;
}

li:between(4,6) {
  color: red;
}
```

## Addons

#### Autoprefixer

Automatically apply vendor prefixes to relevant properties based on data from [CanIUse][caniuse], via [autoprefixer][autoprefixer].

#### Legacy Fallbacks

Automatically generate CSS fallbacks for legacy browsers, via [laggard][laggard].

## Usage

Rucksack is built on [PostCSS][postcss], and can be used in most build tools and stacks easily.

#### Gulp

Use [gulp-postcss][gulp-postcss]

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rucksack = require('rucksack-css');

gulp.task('rucksack', () => {
  return gulp.src('src/*.css')
    .pipe(postcss([ rucksack() ]))
    .pipe(gulp.dest('dist'));
});
```

#### Webpack

Use [postcss-loader][postcss-loader]

`postcss.config.js`

```js
module.exports = {
  plugins: {
    'rucksack-css': {},
  }
};
```

`webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      }
    ]
  }
};
```

#### Grunt

Use [grunt-postcss][grunt-postcss]

```js
grunt.initConfig({
  postcss: {
    options: {
      processors: [
        require('rucksack-css')()
      ]
    },
    dist: {
      src: 'css/*.css'
    }
  }
});
```

#### CLI

Use Rucksack on the command line with [postcss-cli][postcss-cli]

```sh
$ npm i postcss-cli -g
```

`postcss.config.js`

```js
module.exports = {
  use: [ 'rucksack-css' ]
};
```

```sh
$ postcss "input.css" -o 'output.css'
```

> **Note:** Rucksack currently ships with its own CLI tool, this will be deprecated in favor of using the more powerful PostCSS CLI directly in Rucksack 2

#### Javascript API

Since Rucksack is just a PostCSS plugin, you can also use it in JS/Node directly, via the PostCSS API

```js
const postcss = require('postcss');
const rucksack = require('rucksack-css');

postcss([ rucksack() ])
  .process(css, { from: 'src/style.css', to: 'style.css' })
  .then(result => {
      fs.writeFileSync('style.css', result.css);
      if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  });
```

See the [PostCSS Docs][postcss] for examples for your environment.

#### Stylus

Rucksack can be used as a Stylus plugin with [PostStylus][poststylus]

```js
stylus(css).use(poststylus('rucksack-css'))
```

See the [PostStylus Docs][poststylus] for more examples for your environment.

## Options

All features in Rucksack can be toggled by passing options on initialization. By default core features are set to `true`, and optional
addons are set to `false`

Option              | Type    | Default | Description
------------------- | ------- | ------- | -----------
`responsiveType`    | Boolean | `true`  | Whether to enable responsive typography
`shorthandPosition` | Boolean | `true`  | Whether to enable shorthand position properties
`quantityQueries`   | Boolean | `true`  | Whether to enable quantity query pseudo selectors
`inputPseudo`       | Boolean | `true`  | Whether to enable whether to enable extra input pseudo elements
`clearFix`          | Boolean | `true`  | Whether to enable native clear fix
`fontPath`          | Boolean | `true`  | Whether to enable font `src` set generation
`hexRGBA`           | Boolean | `true`  | Whether to enable hex RGBA shortcuts
`easings`           | Boolean | `true`  | Whether to enable extra easing functions
`fallbacks`         | Boolean | `false` | Whether to enable CSS fallbacks addon
`autoprefixer`      | Boolean | `false` | Whether to enable autoprefixer addon
`reporter`          | Boolean | `false` | Whether to enable error reporting from plugins used inside Rucksack

***

MIT © [Madeleine Ostoja][madi]

[postcss]: https://github.com/postcss/postcss
[postcss-loader]: https://github.com/postcss/postcss-loader
[gulp-postcss]: https://github.com/postcss/gulp-postcss
[grunt-postcss]: https://github.com/nDmitry/grunt-postcss
[postcss-cli]: https://github.com/postcss/postcss-cli
[poststylus]: https://github.com/madeleineostoja/poststylus
[type-demo]: https://rucksackcss.org/img/type-demo.gif
[caniuse]: http://caniuse.com
[autoprefixer]: https://github.com/postcss/autoprefixer
[laggard]: https://github.com/madeleineostoja/laggard
[madi]: https://twitter.com/madeleineostoja
