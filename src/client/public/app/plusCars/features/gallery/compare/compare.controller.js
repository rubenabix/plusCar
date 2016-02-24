(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('CompareController', CompareController);

  CompareController.$inject = ['$scope', '$mdDialog', 'cars'];

  function CompareController($scope, $mdDialog, cars) {

    var vm = this;
    vm.close = closeModal;

    function activate() {
      console.log('Activate: ', 'CompareController!!!');
      console.log(cars);
      vm.cars = cars;
    }

    $scope.$on('$destroy', function () {
      console.log('$destroy: ', 'CompareController!!!');
    });

    function closeModal() {
      $mdDialog.hide();
    }

    ////////////////

    activate();

  }
})();
