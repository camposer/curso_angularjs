'use strict';

describe('Controller: CarritoCtrl', function () {

  // load the controller's module
  beforeEach(module('tiendaApp'));

  var CarritoCtrl, scope, sessionStorage, compraService;
  var precio1 = 200;
  var precio2 = 300;
  var cantidad1 = 2;
  var cantidad2 = 3;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    sessionStorage = {
      reset: false,

      $reset: function() {
        this.reset = true;
      },

      productos: [
        {
          nombre: 'TV',
          precio: precio1,
          cantidad: cantidad1
        },
        {
          nombre: 'DVD',
          precio: precio2,
          cantidad: cantidad2
        }
      ]
    };

    compraService = {
      compras: [ ],
      comprar: function(p) {
        this.compras.push(p);
      }
    };

    CarritoCtrl = $controller('CarritoCtrl', {
      $scope: scope,
      $sessionStorage: sessionStorage,
      compraService: compraService
    });
  }));

  it('obtenerTotal', function () {
    expect(CarritoCtrl.obtenerTotal()).toEqual(precio1 * cantidad1 + 
        precio2 * cantidad2);
  });

  it('comprar', function () {
    CarritoCtrl.comprar();
    expect(compraService.compras.length).toEqual(2);
    expect(compraService.compras[0].cantidad).toEqual(cantidad1);
    expect(compraService.compras[1].cantidad).toEqual(cantidad2);
    expect(sessionStorage.reset).toBe(true);    
  });
});