(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$scope', '$mdDialog', 'galleryFactory'];

  function GalleryController($scope, $mdDialog, galleryFactory) {

    var vm = this;
    vm.showDetails = showDetails;

    function activate() {
      console.log('Activate: ', 'GalleryController!!!');

      galleryFactory.getCars()
        .then(function (response) {
          console.log(response);
          vm.cars = response;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function showDetails(car) {
      console.log('showDetails', car);
      $mdDialog.show({
          controller: 'DetailsController as detailsController',
          templateUrl: './../app/plusCars/features/gallery/details-template.html',
          clickOutsideToClose: true,
          locals: {
            car: car
          }
        })
        .then(function (answer) {
          console.log('You said the information was "' + answer + '".');
        }, function () {
          console.log('You cancelled the dialog.');
        });
    }

    $scope.$on('$destroy', function () {
      console.log('$destroy: ', 'GalleryController!!!');
    });

    ////////////////

    ////////////////

    activate();

  }
})();
