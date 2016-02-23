(function () {
  'use strict';
  angular.module('app')
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/gallery');

    $stateProvider

      .state('gallery', {
        url: '/gallery',
        controller: 'GalleryController as galleryController',
        templateUrl: './../app/plusCars/features/gallery/galley-template.html'
      });

  }

})();
