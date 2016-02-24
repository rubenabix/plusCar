(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['$scope', '$mdDialog', 'car'];

  function DetailsController($scope, $mdDialog, car) {

    var vm = this;
    vm.close = closeModal;

    function activate() {
      console.log('Activate: ', 'DetailsController!!!');
      vm.car = car;
    }

    $scope.$on('$destroy', function () {
      console.log('$destroy: ', 'DetailsController!!!');
    });

    function closeModal() {
      $mdDialog.hide();
    }

    ////////////////

    activate();

  }
})();
