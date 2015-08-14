'use strict';

// DOM Ready
$(function(){

  // Animate content if scroll-behaviour: smooth isn't supported
  var scrollSupport = 'scrollBehavior' in document.documentElement.style;
  if (!scrollSupport){

    $('.sidebar__nav__item').click(function(){
      var target = $(this).attr('href').replace('#', '');

      if (location.hash.indexOf(target) === -1){
        $('.content').scrollTo($('a[name="' + target + '"]'), 250, {
          offset: -20
        });
      }
    });

  }


});
