'use strict';

angular.module('tiendaApp')
  	.service('compraService', [ '$http', function($http) {
  		var URL_BASE = '/api/compras';

		this.comprar = function(p) {
			$http.post(URL_BASE, p);
		};

	}]);
