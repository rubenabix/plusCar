(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$scope', '$mdDialog'];

  function GalleryController($scope) {

    let vm = this;

    function activate() {
      console.log('Activate: ', 'GalleryController!!!');
    }

    $scope.$on('$destroy', function () {
      console.log('$destroy: ', 'GalleryController!!!');
    });

    ////////////////

    ////////////////

    activate();

  }
})();
