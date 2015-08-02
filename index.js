'use strict';

var $postcss = require('postcss');

// Core Rucksack plugins (always used)
var core = [
  require('postcss-alias'),
  require('postcss-clearfix'),
  require('postcss-easings'),
  require('postcss-fontpath'),
  require('postcss-hexrgba'),
  require('postcss-position'),
  require('postcss-quantity-queries'),
  require('postcss-responsive-type')
];

// CSS fallbacks set (optional)
var fallbacks = [
  require('postcss-color-rgba-fallback'),
  require('postcss-epub'),
  require('postcss-opacity'),
  require('postcss-pseudoelements'),
  require('postcss-vmin')
];

// Individual add-ons (optional)
var autoprefixer = require('autoprefixer'),
    normalize = require('postcss-normalize'),
    colors = require('postcss-color-palette');

// Be happy eslint (define custom palette)
colors = colors({ palette: 'material' });

// Default options
var defaults = {
    fallbacks: true,
    autoprefixer: true,
    normalize: false,
    colors: true
};

// Build PostCSS plugin
var rucksack = $postcss.plugin('rucksack', function(options) {

  var postcss = $postcss(),
      plugins = [];

  // Build options with defaults
  options = options || {};

  for (var option in defaults) {
    if (defaults.hasOwnProperty(option) && !options.hasOwnProperty(option)) {
      options[option] = defaults[option];
    }
  }

  // Build plugin array based on options
  plugins = plugins.concat(core);

  if (options.fallbacks) {
    plugins = plugins.concat(fallbacks);
  }

  if (options.autoprefixer) {
    plugins.push(autoprefixer);
  }

  if (options.normalize) {
    plugins.push(normalize);
  }

  if (options.colors) {
    plugins.push(colors);
  }

  // Build PostCSS bundle
  plugins.forEach(function(plugin){
    postcss.use(plugin);
  });

  return postcss;

});

// Export new PostCSS processor, bundled with plugins
module.exports = rucksack;

module.exports.process = function(css, options) {
  options = options || {};
  options.map = options.map || (options.sourcemap ? true : null);

  var result = $postcss([rucksack(options)]).process(css, options);

  // return a css string if inline/no sourcemap.
  if (options.map === null || options.map === true || options.map && options.map.inline) {
      return result.css;
  }

  // otherwise return an object of css & map
  return result;

};
