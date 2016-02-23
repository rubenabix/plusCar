(function () {
  'use strict';

  angular
    .module('plusCar')
    .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['$scope', '$mdDialog'];

  function DetailsController($scope, $mdDialog) {

    var vm = this;
    vm.close = closeModal;

    function activate() {
      console.log('Activate: ', 'DetailsController!!!');
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
