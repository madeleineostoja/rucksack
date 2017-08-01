const postcss = require('postcss');

const PLUGINS = [
        {
          option: 'alias',
          module: require('postcss-alias')
        },
        {
          option: 'responsiveType',
          module: require('postcss-responsive-type')
        },
        {
          option: 'shorthandPosition',
          module: require('postcss-position')
        },
        {
          option: 'quantityQueries',
          module: require('postcss-quantity-queries')
        },
        {
          option: 'inputPseudo',
          module: require('postcss-input-style')
        },
        {
          option: 'clearFix',
          module: require('postcss-clearfix')
        },
        {
          option: 'fontPath',
          module: require('postcss-fontpath')
        },
        {
          option: 'hexRGBA',
          module: require('postcss-hexrgba')
        },
        {
          option: 'easings',
          module: require('postcss-easings')
        },
        {
          option: 'fallbacks',
          module: require('laggard')
        },
        {
          option: 'autoprefixer',
          module: require('autoprefixer')
        },
        {
          option: 'reporter',
          module: require('postcss-reporter')
        }
      ],
      DEFAULTS = {
        alias: true,
        responsiveType: true,
        shorthandPosition: true,
        quantityQueries: true,
        inputPseudo: true,
        clearFix: true,
        fontPath: true,
        hexRGBA: true,
        easings: true,
        fallbacks: true,
        autoprefixer: true,
        reporter: true,
        autoprefixer: false,
        fallbacks: false,
        reporter: false
      };

// Export plugin bundle
module.exports = postcss.plugin('rucksack', opts => {
  opts = opts || {};

  let config = Object.assign({}, DEFAULTS, opts),
      bundle = postcss();

  PLUGINS.forEach(plugin => {
    config[plugin.option] && bundle.use(plugin.module);
  });

  return bundle;
});

// Support sourcemaps
module.exports.process = (css, opts) => {
  opts = opts || {};
  opts.map = opts.map || (opts.sourcemap ? true : null);

  let result = postcss([ rucksack(opts) ]).process(css, opts);

  if (opts.map === null || opts.map === true || opts.map && opts.map.inline) {
    return result.css;
  }

  return result;
};
