(function () {
  'use strict';

  angular
    .module('plusCar')
    .factory('galleryFactory', galleryFactory);

  galleryFactory.$inject = ['$http', '$q'];

  function galleryFactory($http, $q) {

    var cars = [
      {
        id: 0,
        description: 'Version R-Desing .Motor Turbo de 230hp Un solo dueño Record de Agencia Financiamiento disponible-',
        brand: 'Volvo',
        price: '$22,500.00',
        picture: './../images/cars/volvo-1.jpg',
        details: [
          {
            label: 'Marca',
            content: 'Volvo'
          },
          {
            label: 'Modelo',
            content: 'S40 T5 R-Desing'
          },
          {
            label: 'Tranmisión',
            content: 'Automatico'
          },
          {
            label: 'Combustible',
            content: 'Gasolina'
          },
          {
            label: 'Año',
            content: '2011'
          },
          {
            label: 'Estilo',
            content: 'Sedán'
          },
          {
            label: 'Precio',
            content: '$22,500.00'
          }
        ]
      },
      {
        id: 1,
        description: 'Bolsas de Aire, Alarma, Espejos Electricos, Frenos ABS',
        brand: 'Peugeot',
        price: '$13,500.00',
        picture: './../images/cars/peugeot-1.jpg',
        details: [
          {
            label: 'Marca',
            content: 'Peugeot'
          },
          {
            label: 'Modelo',
            content: 'partner'
          },
          {
            label: 'Tranmisión',
            content: 'Manual'
          },
          {
            label: 'Combustible',
            content: 'Diesel'
          },
          {
            label: 'Año',
            content: '2011'
          },
          {
            label: 'Estilo',
            content: 'Pánel'
          },
          {
            label: 'Precio',
            content: '$13,500.00'
          }
        ]
      },
      {
        id: 2,
        description: 'Direccion Hidraulica, Cierre Central, Vidrios Tintados, Bolsas de Aire',
        brand: 'Chevrolet',
        price: '$23,500.00',
        picture: './../images/cars/chevrolet-1.jpg',
        details: [
          {
            label: 'Marca',
            content: 'Chevrolet'
          },
          {
            label: 'Modelo',
            content: 'TRAX'
          },
          {
            label: 'Tranmisión',
            content: 'Automatico'
          },
          {
            label: 'Combustible',
            content: 'Gasolina'
          },
          {
            label: 'Año',
            content: '2013'
          },
          {
            label: 'Estilo',
            content: 'Todo Terreno 4x2'
          },
          {
            label: 'Precio',
            content: '$23,500.00'
          }
        ]
      },
      {
        id: 3,
        description: 'Version R-Desing .Motor Turbo de 230hp Un solo dueño Record de Agencia Financiamiento disponible-',
        brand: 'Toyota',
        price: '$22,800.00',
        picture: './../images/cars/toyota-1.jpg',
        details: [
          {
            label: 'Marca',
            content: 'Toyota'
          },
          {
            label: 'Modelo',
            content: 'RAV4 TOYOTA'
          },
          {
            label: 'Tranmisión',
            content: 'Manual'
          },
          {
            label: 'Combustible',
            content: 'Gasolina'
          },
          {
            label: 'Año',
            content: '2012'
          },
          {
            label: 'Estilo',
            content: 'SUV'
          },
          {
            label: 'Precio',
            content: '$22,800.00'
          }
        ]
      },
      {
        id: 4,
        description: 'Aire Acondicionado, Aros de Lujo, Halogenos, RTV',
        brand: 'Fiat',
        price: '$19,000.00',
        picture: './../images/cars/fiat-1.jpg',
        details: [
          {
            label: 'Marca',
            content: 'Fiat'
          },
          {
            label: 'Modelo',
            content: 'Linea Dinamyc'
          },
          {
            label: 'Tranmisión',
            content: 'Manual'
          },
          {
            label: 'Combustible',
            content: 'Gasolina'
          },
          {
            label: 'Año',
            content: '2014'
          },
          {
            label: 'Estilo',
            content: 'Sedán'
          },
          {
            label: 'Precio',
            content: '$19,000.00'
          }
        ]
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
