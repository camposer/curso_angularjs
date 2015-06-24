'use strict';

describe('Controller: CatalogoCtrl', function () {

  // load the controller's module
  beforeEach(module('tiendaApp'));

  var CatalogoCtrl, scope, location, sessionStorage, productoService;

  // TODO Mejorar mockups como se explica aquí http://www.sitepoint.com/mocking-dependencies-angularjs-tests/
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    location = {
      path: function(_url) { 
        this.url = _url;
      }
    };
    sessionStorage = {
      $reset: function() { }
    };
    productoService = {
      obtenerTodos: function(callback) {
        callback([
          {
            id: 1,
            nombre: 'uno',
            precio: 100
          },
          {
            id: 2,
            nombre: 'dos',
            precio: 200
          },
                    {
            id: 3,
            nombre: 'tres',
            precio: 300
          }          
        ]);
      }
    }
    CatalogoCtrl = $controller('CatalogoCtrl', {
      $scope: scope,
      $location: location, 
      $sessionStorage: sessionStorage, 
      productoService: productoService
    });
  }));

  it('init', function () {
    expect(scope.productos.length).toEqual(3);
  });

  it('agregar', function () {
    scope.productos[0].cantidad = 2;
    CatalogoCtrl.agregar();
    expect(sessionStorage.productos.length).toEqual(1);
    expect(location.url).toEqual('/carrito');
  });

});
