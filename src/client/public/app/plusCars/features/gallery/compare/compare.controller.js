(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('CompareController', CompareController);

  CompareController.$inject = ['$scope', '$mdDialog'];

  function CompareController($scope, $mdDialog) {

    var vm = this;
    vm.close = closeModal;

    function activate() {
      console.log('Activate: ', 'CompareController!!!');
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
