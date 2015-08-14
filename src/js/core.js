'use strict';

// DOM Ready
$(function() {

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
              console[method] = noop;
          }
      }

    // Extend jQuery .on() & .bind() handlers with delay argument, for smooth resizing
    // Usage = .on('resize', function(){}, 100);
    (function($) {
      var bindings = { on: $.fn.on, bind: $.fn.bind };
      $.each(bindings, function(k){
        $.fn[k] = function () {
          var args = [].slice.call(arguments),
            delay = args.pop(),
            fn = args.pop(),
            timer;

          args.push(function () {
            var self = this,
              arg = arguments;
            clearTimeout(timer);
            timer = setTimeout(function(){
              fn.apply(self, [].slice.call(arg));
            }, delay);
          });

          return bindings[k].apply(this, isNaN(delay) ? arguments : args);
        };
      });
    })(jQuery);

  });
