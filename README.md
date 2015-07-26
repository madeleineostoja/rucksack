<p align="center">
 <img src="http://simplaio.github.io/rucksack/logo.png" alt="rucksack logo" height="325" />
</p>

<p align="center">
  <a href="https://npmjs.org/package/rucksack-css" target="_blank"><img src="https://badge.fury.io/js/rucksack-css.svg" alt="NPM version" /></a>
  <a href="https://travis-ci.org/simplaio/rucksack" target="_blank"><img src="https://travis-ci.org/simplaio/rucksack.svg?branch=master" alt="Build satus" /></a>
  <a href="https://david-dm.org/simplaio/rucksack" target="_blank"><img src="https://david-dm.org/simplaio/rucksack.svg?theme=shields.io" alt="Dependency Status" /></a>
</p>

<br/>

A little bag of CSS superpowers, built on [PostCSS][postcss].

Rucksack makes CSS development less painful, with the features and shortcuts it should have come with out of the box.

Made with &#9829; by the folks at [Simpla][simpla].

--

### Install

```sh
$ npm install --save rucksack-css postcss
```

--

### Usage

General usage:

1. Add [PostCSS][postcss] to your build workflow
2. Include Rucksack as a PostCSS plugin

<br/>

###### Node
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

<br/>

###### Gulp
Use [gulp-postcss][gulp-postcss]
```js
var postcss = require('gulp-postcss'),
    rucksack = require('rucksack-css');

gulp.task('css', function () {
  return gulp.src('src/*.css')
    .pipe( postcss([ rucksack() ]) )
    .pipe( gulp.dest('.') );
});
```

<br/>

###### Grunt
Use [grunt-postcss][grunt-postcss]
```js
grunt.initConfig({
  css: {
    options: {
      processors: [require('rucksack-css')]
    },
    dist: {
      src: 'src/*.css'
    }
  }
});
```

<br/>

###### CLI
Use [PostCSS CLI][postcss-cli] to process CSS on the command line
```sh
$ postcss --use rucksack-css -o style.css style.css
```

<br/>

###### Stylus
Use Rucksack as a Stylus plugin with [PostStylus][poststylus]
```js
stylus(css).use(poststylus('rucksack-css'))
```

See the [PostStylus Docs][poststylus] for more examples for your environment.

--

### Core Features

_Shorthand syntax for positioning properties_
```css
.foo {
  absolute: 0 20px;
  relative: 20% 0 30px;
}
```

_Automagical responsive typography_
```css
.foo {
  font-size: responsive;
}
```
![Responsive Type Demo][type-demo]




_Native clearfix_
```css
.foo {
  clear: fix;
}
```

_Hex shortcuts for RGBA_
```css
.foo {
  color: rgba(#fff, 0.8);
}
```

_One-rule `@font-face` `src` sets (expands to [FontSpring syntax][fontspring])_
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
ul li:at-least(4) {
  color: blue;
}

ul li:between(4,6) {
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

###### Normalization
Automatically apply the latest Normalize.css stylesheet to standardize browser inconsistencies.

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

###### New Default Colors
Swap out those ugly default colors with replacements from [Material Design Colors][material-colors].

--

### Options

Pass booleans to toggle optional extras on/off
```js
.rucksack({
  /* options */
})
```

`autoprefixer: true`: Toggle autoprefixing on/off (default: `true`).

`normalize: true`: Toggle normalizing on/off (default: `true`).

`fallbacks: true`: Toggle legacy fallbacks on/off (default: `true`).

`colors: true`: Toggle color replacements on/off (default: `true`).

--

### Documentation
Full docs coming soon!

--

### License

MIT © [Simpla][simpla]

[simpla]: http://simpla.io
[postcss]: https://github.com/postcss/postcss
[gulp-postcss]: https://github.com/postcss/gulp-postcss
[grunt-postcss]: https://github.com/nDmitry/grunt-postcss
[postcss-cli]: https://github.com/code42day/postcss-cli
[poststylus]: https://github.com/seaneking/poststylus
[type-demo]: /type-demo.gif?raw=true
[fontspring]: http://blog.fontspring.com/2011/02/further-hardening-of-the-bulletproof-syntax/
[caniuse]: http://caniuse.com
[material-colors]: https://www.google.com/design/spec/style/color.html
