'use strict';

var $postcss = require('postcss');

var processors = {
  alias: require('postcss-alias'),
  clearFix: require('postcss-clearfix'),
  easings: require('postcss-easings'),
  fontPath: require('postcss-fontpath'),
  hexRGBA: require('postcss-hexrgba'),
  position: require('postcss-position'),
  quantityQueries: require('postcss-quantity-queries'),
  responsiveType: require('postcss-responsive-type'),
  inputStyles: require('postcss-input-style'),
  fallbacks: [
    require('postcss-color-rgba-fallback'),
    require('postcss-epub'),
    require('postcss-opacity'),
    require('postcss-pseudoelements'),
    require('postcss-vmin')
  ],
  autoprefixer: require('autoprefixer')
};

// Error reporting
var reporter = require('postcss-reporter');

// Build PostCSS plugin
var rucksack = $postcss.plugin('rucksack', function(options) {

  var postcss = $postcss(),
      plugins = [];

  options = options || {};

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
