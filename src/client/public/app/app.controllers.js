(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope) {

    var vm = this;

    vm.title = 'Plus Car';

    /////////////////

    function activate() {
      console.log('Activate: ', 'MainController!!!');
      vm.isReady = true;
    }

    ////////////////

    activate();

  }
})();
