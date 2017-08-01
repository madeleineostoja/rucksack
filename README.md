<p align="center">
 <img src="http://simplaio.github.io/rucksack/logo.png" alt="rucksack logo" height="325" />
</p>

<p align="center">
  <a href="https://npmjs.org/package/rucksack-css"><img src="https://img.shields.io/npm/v/rucksack-css.svg" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/rucksack-css"><img src="https://img.shields.io/npm/dm/rucksack-css.svg" alt="Downloads" /></a>
  <a href="https://travis-ci.org/simplaio/rucksack"><img src="https://travis-ci.org/simplaio/rucksack.svg?branch=master" alt="Build satus" /></a>
</p>

A little bag of CSS superpowers, built on [PostCSS][postcss].

Rucksack makes CSS development less painful, with the features and shortcuts it should have come with out of the box.

**Read the full docs at [simplaio.github.io](https://simplaio.github.io/rucksack)**

### Contents

- [Install](#install)
- [Usage](#usage)
  - [Gulp](#gulp)
  - [Grunt](#grunt)
  - [Broccoli](#broccoli)
  - [CLI](#cli)
  - [PostCSS](#postcss)
  - [Stylus](#stylus)
- [Features](#features)
  - [Responsive typography](#responsive-typography)
  - [Shorthand positioning syntax](#shorthand-positioning-syntax)
  - [Native clearfix](#native-clearfix)
  - [Automatic font src generation](#automatic-font-src-generation)
  - [Extra input pseudo-elements](#extra-input-pseudo-elements)
  - [Hex shortcuts for RGBA](#hex-shortcuts-for-rgba)
  - [More easing functions](#more-easing-functions)
  - [Quantity pseudo-selectors](#quantity-pseudo-selectors)
  - [CSS property aliases](#css-property-aliases)
- [Addons](#addons)
  - [Autoprefixer](#autoprefixer)
  - [Legacy Fallbacks](#legacy-fallbacks)
- [Options](#options)


## Install

Rucksack is available on NPM under `rucksack-css`, install it with Yarn or NPM

```sh
$ yarn add rucksack-css --dev
```


```sh
$ npm i rucksack-css --save-dev
```

## Usage

Rucksack can be used as a PostCSS plugin, direclty on the command line, and has helpers available for most build tools. 

#### Gulp

Use [gulp-rucksack][gulp-rucksack]

```js
const gulp = require('gulp');
const rucksack = require('gulp-rucksack');

gulp.task('rucksack', () => {
  return gulp.src('src/style.css')
    .pipe(rucksack())
    .pipe(gulp.dest('style.css'));
});
```

#### Grunt

Use [grunt-rucksack][grunt-rucksack]

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	rucksack: {
		compile: {
			files: {
				'style.css': 'src/style.css'
			}
		}
	}
});

grunt.registerTask('default', ['rucksack']);
```

#### Broccoli

Use [broccoli-rucksack][broccoli-rucksack]

```js
const rucksack = require('broccoli-rucksack');

tree = rucksack(tree, [options]);
```

#### CLI

Process CSS directly on the command line

```sh
$ rucksack src/style.css style.css [options]
```

#### PostCSS

Rucksack is built on PostCSS, and can be used as a PostCSS plugin

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

#### CSS property aliases

```css
@alias {
  fs: font-size;
  bg: background;
}

.foo {
  fs: 16px;
  bg: #fff;
}
```

## Addons

#### Autoprefixer

Automatically apply vendor prefixes to relevant properties based on data from [CanIUse][caniuse], via [autoprefixer][autoprefixer].

#### Legacy Fallbacks

Automatically generate CSS fallbacks for legacy browsers, via [laggard][laggard].

## Options

All features in Rucksack can be toggled by passing options on initialization. By default core features are set to `true`, and optional
addons are set to `false`

Option              | Type    | Default | Description                                                         
------------------- | ------- | ------- | -----------
`responsiveType`    | Boolean | `true`  | Whether to enable responsive typography                             
`shorthandPosition` | Boolean | `true`  | Whether to enable shorthand position properties                     
`quantityQueries`   | Boolean | `true`  | Whether to enable quantity query psuedo selectors                   
`alias`             | Boolean | `true`  | Whether to enable to enable property aliases                        
`inputPseudo`       | Boolean | `true`  | Whether to enable whether to enable extra input pseudo elements     
`clearFix`          | Boolean | `true`  | Whether to enable native clear fix                                  
`fontPath`          | Boolean | `true`  | Whether to enable font `src` set generation                         
`hexRGBA`           | Boolean | `true`  | Whether to enable hex RGBA shortcuts                                
`easings`           | Boolean | `true`  | Whether to enable extra easing functions                            
`fallbacks`         | Boolean | `false` | Whether to enable CSS fallbacks addon                               
`autoprefixer`      | Boolean | `false` | Whether to enable autoprefixer addon                                
`reporter`          | Boolean | `false` | Whether to enable error reporting from plugins used inside Rucksack 


***

MIT © [Sean King][sean]

[postcss]: https://github.com/postcss/postcss
[gulp-rucksack]: https://github.com/simplaio/gulp-rucksack
[grunt-rucksack]: https://github.com/simplaio/grunt-rucksack
[broccoli-rucksack]: https://github.com/simplaio/broccoli-rucksack
[poststylus]: https://github.com/seaneking/poststylus
[type-demo]: http://simplaio.github.io/rucksack/img/type-demo.gif
[caniuse]: http://caniuse.com
[autoprefixer]: https://github.com/postcss/autoprefixer
[laggard]: https://github.com/seaneking/laggard
[sean]: https://twitter.com/seaneking
