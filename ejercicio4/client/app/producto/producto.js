'use strict';

angular.module('tiendaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('producto', {
        url: '/producto',
        templateUrl: 'app/producto/producto.html',
        controller: 'ProductoCtrl',
        controllerAs: 'productoCtrl'
      });
  });