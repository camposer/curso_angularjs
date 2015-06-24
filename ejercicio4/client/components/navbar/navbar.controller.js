'use strict';

angular.module('tiendaApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Catálogo',
      'link': '/'
    },
    {
      'title': 'Carrito',
      'link': '/carrito'
    },
    {
      'title': 'Producto',
      'link': '/producto'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });