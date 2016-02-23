(function appConfig() {
  'use strict';

  angular.module('plusCar')
    .config(configuration);

  configuration.$inject = ['$httpProvider', '$mdIconProvider'];

  function configuration($httpProvider, $mdIconProvider) {

    function icons() {
      $mdIconProvider
        .iconSet('content', './../images/icons/svg-sprite-content.svg', 24)
        .iconSet('navigation', './../images/icons/svg-sprite-navigation.svg', 24)
        .iconSet('alert', './../images/icons/svg-sprite-alert.svg', 24)
        .iconSet('action', './../images/icons/svg-sprite-action.svg', 24)
        .iconSet('editor', './../images/icons/svg-sprite-editor.svg', 24)
        .defaultIconSet('./../images/icons/svg-sprite-alert.svg', 24);
    }

    function activate() {
      icons();
    }

    activate();
  }


})();
