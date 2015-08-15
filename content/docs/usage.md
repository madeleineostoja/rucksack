---
title: "Installation & Usage"
anchor: "usage"
weight: 0
---

Integrating Rucksack into your workflow is easy. Just install it as an [npm module](https://www.npmjs.com/package/rucksack-css), then either integrate it into your build tool of choice or process your CSS directly on the command line.

Since it's built on the [PostCSS ecosystem](https://github.com/postcss/postcss) it plays nice with all other CSS pre and post processors, and can even integrate into Stylus directly.

First install the npm module, then set up your workflow of choice:
```bash
$ npm install rucksack-css --save
```

<div style="overflow: auto;">

{{% usage title="With Gulp" id="gulp" img="http://simplaio.github.io/rucksack/img/usage/gulp.png" %}}

Rucksack has a Gulp plugin - [gulp-rucksack](https://github.com/simplaio/gulp-rucksack)

Install with npm
```bash
$ npm install gulp-rucksack --save-dev
```


Then setup your gulp task
```javascript
var gulp = require('gulp'),
    rucksack = require('gulp-rucksack');

gulp.task('rucksack', function() {
  return gulp.src('src/style.css')
    .pipe(rucksack())
    .pipe(gulp.dest('style.css'));
});
```


Gulp Rucksack comes with full sourcemap support

```javascript
var gulp = require('gulp'),
    rucksack = require('gulp-rucksack'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('rucksack', function() {
  return gulp.src('src/style.css')
    .pipe(sourcemaps.init())
    .pipe(rucksack())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('style.css'));
});
```

{{% /usage %}}

{{% usage title="With Grunt" id="grunt" img="http://simplaio.github.io/rucksack/img/usage/grunt.png" %}}

Rucksack has a Grunt plugin - [grunt-rucksack](https://github.com/simplaio/grunt-rucksack)

Install it via npm
```bash
$ npm install grunt-rucksack --save-dev
```

Then load up your Grunt task

```javascript
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

{{% /usage %}}

{{% usage title="With Broccoli" id="broccoli" img="http://simplaio.github.io/rucksack/img/usage/broccoli.png" %}}

Rucksack has a Broccoli plugin - [broccoli-rucksack](https://github.com/simplaio/broccoli-rucksack)

Install via npm
```bash
$ npm install broccoli-rucksack --save-dev
```

Then setup your tree
```javascript
var rucksack = require('broccoli-rucksack');
tree = rucksack(tree, [options]);
```

{{% /usage %}}

{{% usage title="Command Line" id="cli" img="http://simplaio.github.io/rucksack/img/usage/cli.png" %}}

Process CSS directly on the command line with the Rucksack CLI tool. It's comes bundled with Rucksack, so you can try it out straight away.

First install the Rucksack npm module globally
```bash
$ npm install -g rucksack-css
```

Then you can run the tool from anywhere
```bash
$ rucksack src/style.css style.css [options]
```

Options:
```bash
  --no-autoprefixer   Disable automatic vendor prefixing.

  --no-fallbacks      Disable legacy fallbacks.

  --no-colors         Disable default color replacements.

  --version,    -v    Show the version number.

  --help,       -h    Show help screen.
```

{{% /usage %}}

{{% usage title="With PostCSS" id="postcss" img="http://simplaio.github.io/rucksack/img/usage/postcss.png" %}}

Rucksack is built on PostCSS, and can be used as a PostCSS plugin.

```javascript
var postcss = require('postcss'),
    rucksack = require('rucksack-css');

postcss([ rucksack() ])
  .process(css, { from: 'src/style.css', to: 'style.css' })
  .then(function (result) {
      fs.writeFileSync('style.css', result.css);
      if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  });
```

See the [PostCSS Docs](https://github.com/postcss/postcss) for examples for your environment.

{{% /usage %}}

{{% usage title="With Stylus" id="stylus" img="http://simplaio.github.io/rucksack/img/usage/stylus.png" %}}

Rucksack can be used as a Stylus plugin with [PostStylus](https://github.com/seaneking/poststylus)

```javascript
var poststylus = require('poststylus');

stylus(css).use(
  poststylus('rucksack-css')
);
```

See the [PostStylus Docs](https://github.com/seaneking/poststylus) for examples for your environment.
{{% /usage %}}

</div>
