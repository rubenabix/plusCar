(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$mdMedia', '$mdSidenav', '$mdDialog'];

  function MainController($scope, $mdMedia, $mdSidenav, $mdDialog) {

    var vm = this;

    vm.title = 'Plus Car';
    vm.showCompareForm = showCompareForm;

    function showCompareForm(event) {
      console.log('showCompareForm');
      $mdDialog.show({
          controller: 'CompareController as compareController',
          templateUrl: './../app/plusCars/features/gallery/compare-template.html',
          parent: angular.element(document.body),
          targetEvent: event,
          clickOutsideToClose: true
        })
        .then(function (answer) {
          console.log('You said the information was "' + answer + '".');
        }, function () {
          console.log('You cancelled the dialog.');
        });
    }

    /////////////////

    function activate() {
      console.log('Activate: ', 'MainController!!!');
      vm.isReady = true;
    }

    ////////////////

    activate();

  }
})();
