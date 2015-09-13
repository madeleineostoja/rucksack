<p align="center">
 <img src="http://simplaio.github.io/rucksack/logo.png" alt="rucksack logo" height="325" />
</p>

<p align="center">
  <a href="https://npmjs.org/package/rucksack-css"><img src="https://badge.fury.io/js/rucksack-css.svg" alt="NPM version" /></a>
  <a href="https://travis-ci.org/simplaio/rucksack"><img src="https://travis-ci.org/simplaio/rucksack.svg?branch=master" alt="Build satus" /></a>
  <a href="https://david-dm.org/simplaio/rucksack"><img src="https://david-dm.org/simplaio/rucksack.svg?theme=shields.io" alt="Dependency Status" /></a>
</p>

<br/>

A little bag of CSS superpowers, built on [PostCSS][postcss].

Rucksack makes CSS development less painful, with the features and shortcuts it should have come with out of the box.

Made with &#9829; by the folks at [Simpla][simpla].

**Read the full docs at http://simplaio.github.io/rucksack**

--

### Install

```sh
$ npm install --save rucksack-css
```

<br/>

### Usage

###### Gulp
Use [gulp-rucksack][gulp-rucksack]

```js
var gulp = require('gulp');
var rucksack = require('gulp-rucksack');

gulp.task('rucksack', function() {
  return gulp.src('src/style.css')
    .pipe(rucksack())
    .pipe(gulp.dest('style.css'));
});
```

###### Grunt
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

###### Broccoli
Use [broccoli-rucksack][broccoli-rucksack]

```js
var rucksack = require('broccoli-rucksack');
tree = rucksack(tree, [options]);
```

###### CLI
Process CSS directly on the command line

```sh
$ rucksack src/style.css style.css [options]
```

###### PostCSS
Rucksack is built on PostCSS, and can be used as a PostCSS plugin.

```js
var postcss = require('postcss'),
    rucksack = require('rucksack-css');

postcss([ rucksack() ])
  .process(css, { from: 'src/style.css', to: 'style.css' })
  .then(function (result) {
      fs.writeFileSync('style.css', result.css);
      if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  });
```
 See the [PostCSS Docs][postcss] for examples for your environment.

###### Stylus
Rucksack can be used as a Stylus plugin with [PostStylus][poststylus]

```js
stylus(css).use(poststylus('rucksack-css'))
```

See the [PostStylus Docs][poststylus] for more examples for your environment.

--

### Core Features

_Automagical responsive typography_
```css
.foo {
  font-size: responsive;
}
```
![Responsive Type Demo][type-demo]


_Shorthand syntax for positioning properties_
```css
.foo {
  position: absolute 0 20px;
}
```

_Native clearfix_
```css
.foo {
  clear: fix;
}
```

_Input pseudo-elements_
```css
input[type="range"]::track {
  height: 2px;
}
```

_Hex shortcuts for RGBA_
```css
.foo {
  color: rgba(#fff, 0.8);
}
```

_Shorthand `@font-face` src sets (becomes [FontSpring syntax][fontspring])_
```css
@font-face {
  font-family: 'My Font';
  font-path: '/path/to/font/file';
}
```

_Whole library of modern easing functions_
```css
.foo {
  transition: all 250ms ease-out-elastic;
}
```

_Powerful quantity pseudo-selectors_
```css
li:at-least(4) {
  color: blue;
}

li:between(4,6) {
  color: red;
}
```

_CSS property aliases_
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

--

### Optional Extras

###### Autoprefixing
Automatically apply vendor prefixes to relevant properties based on data from [CanIUse][caniuse].


###### Legacy Fallbacks
Automatically insert legacy fallbacks for modern properties.
```css
/* before */
.foo {
  color: rgba(0,0,0,0.8);
  width: 50vmin;
}

.foo::before{
  opacity: 0.8;
}

/* after */
.foo {
  color: rgb(0,0,0);
  color: rgba(0,0,0,0.8);
  width: 50vm;
  width: 50vmin;
}

.foo:before{
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
}
```

--

**Read the full docs at http://simplaio.github.io/rucksack**

--

### Options
All features in Rucksack can be toggled on or off by passing options on initialization. By default all core features are set to `true`, and optional
addons are set to `false`.

Core features (default to `true`):
- `responsiveType`
- `shorthandPosition`
- `quantityQueries`
- `alias`
- `inputPseudo`
- `clearFix`
- `fontPath`
- `hexRGBA`
- `easings`

Addons (default to `false`):
- `fallbacks`
- `autoprefixer`

```js
// Set in build tool, etc.
.rucksack({
  // options
})
```
--

### License

MIT © [Simpla][simpla]

[simpla]: http://simpla.io
[postcss]: https://github.com/postcss/postcss
[gulp-rucksack]: https://github.com/simplaio/gulp-rucksack
[grunt-rucksack]: https://github.com/simplaio/grunt-rucksack
[broccoli-rucksack]: https://github.com/simplaio/broccoli-rucksack
[poststylus]: https://github.com/seaneking/poststylus
[type-demo]: http://simplaio.github.io/rucksack/img/type-demo.gif
[fontspring]: http://blog.fontspring.com/2011/02/further-hardening-of-the-bulletproof-syntax/
[caniuse]: http://caniuse.com
[material-colors]: https://www.google.com/design/spec/style/color.html
