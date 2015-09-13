'use strict';

var $postcss = require('postcss');

var processors = {
  responsiveType: require('postcss-responsive-type'),
  shorthandPosition: require('postcss-position'),
  quantityQueries: require('postcss-quantity-queries'),
  alias: require('postcss-alias'),
  inputPseudo: require('postcss-input-style'),
  clearFix: require('postcss-clearfix'),
  fontPath: require('postcss-fontpath'),
  hexRGBA: require('postcss-hexrgba'),
  easings: require('postcss-easings'),
  fallbacks: [
    require('postcss-color-rgba-fallback'),
    require('postcss-opacity'),
    require('postcss-pseudoelements'),
    require('postcss-vmin')
  ],
  autoprefixer: require('autoprefixer')
};

// Error reporting
var reporter = require('postcss-reporter');

// Default options
var defaults = {
  autoprefixer: false,
  fallbacks: false
};

// Build PostCSS plugin
var rucksack = $postcss.plugin('rucksack', function(options) {

  var postcss = $postcss(),
      plugins = [];

  options = options || {};

  Object.keys(defaults).forEach(function(opt){
    if (!options.hasOwnProperty(opt)){
      options[opt] = defaults[opt];
    }
  });

  Object.keys(processors).forEach(function(feature){
    var processor = processors[feature];

    if (options[feature] !== false) {

      if (processor instanceof Array) {
        plugins = plugins.concat(processor);
      } else {
        plugins.push(processor);
      }

    }
  });

  plugins.push(reporter);

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
