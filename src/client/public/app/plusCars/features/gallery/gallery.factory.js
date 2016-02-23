(function () {
  'use strict';

  angular
    .module('plusCar')
    .factory('galleryFactory', galleryFactory);

  galleryFactory.$inject = ['$http', '$q'];

  function galleryFactory($http, $q) {

    var cars = [
      {
        description: 'Version R-Desing .Motor Turbo de 230hp Un solo dueño Record de Agencia Financiamiento disponible-'
      },
      {
        description: 'Direccion Hidraulica, Cierre Central, Vidrios Tintados, Bolsas de Aire, Alarma, Espejos Electricos, Frenos ABS, Aire Acondicionado, Aros de Lujo, Halogenos, Cruise Control, RTV'
      },
      {
        description: 'Direccion Hidraulica, Cierre Central, Vidrios Tintados, Bolsas de Aire, Alarma, Espejos Electricos, Frenos ABS, Aire Acondicionado, Aros de Lujo, Halogenos, Cruise Control, RTV'
      },
      {
        description: 'Direccion Hidraulica, Cierre Central, Vidrios Tintados, Bolsas de Aire, Alarma, Espejos Electricos, Frenos ABS, Aire Acondicionado, Aros de Lujo, Halogenos, Cruise Control, RTV'
      }
    ];

    function getCars() {
      return $q.when(cars);
    }

    var factory = {
      getCars: getCars
    };

    ////////////////


    ////////////////

    return factory;

  }
})();
