'use strict';

angular.module('tiendaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carrito', {
        url: '/carrito',
        templateUrl: 'app/carrito/carrito.html',
        controller: 'CarritoCtrl',
        controllerAs: 'carritoCtrl'
      });
  });