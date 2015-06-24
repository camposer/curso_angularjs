'use strict';

angular.module('tiendaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catalogo', {
        url: '/',
        templateUrl: 'app/catalogo/catalogo.html',
        controller: 'CatalogoCtrl',
        controllerAs: 'catalogoCtrl'
      });
  });