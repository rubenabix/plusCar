(function () {

  'use strict';

  angular.module('plusCar')
    .run(runBlock);

  runBlock.$inject = ['$window', '$templateCache', '$http', '$location', '$rootScope'];
  function runBlock($window, $templateCache, $http, $location, $rootScope) {

    (function ($window) {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        $window.requestAnimationFrame = $window[vendors[x] + 'RequestAnimationFrame'];
        $window.cancelAnimationFrame = $window[vendors[x] + 'CancelAnimationFrame']
          || $window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!$window.requestAnimationFrame)
        $window.requestAnimationFrame = function (callback, element) {
          var currTime = Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = $window.setTimeout(function () {
              callback(currTime + timeToCall);
            },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

      if (!$window.cancelAnimationFrame)
        $window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
    }($window));

    const urls = [

      './../images/icons/svg-sprite-content.svg',
      './../images/icons/svg-sprite-navigation.svg',
      './../images/icons/svg-sprite-alert.svg',
      './../images/icons/svg-sprite-action.svg',
      './../images/icons/svg-sprite-editor.svg'

    ];

    angular.forEach(urls, function (url) {
      $http.get(url, {cache: $templateCache});
    });

  }

})();
