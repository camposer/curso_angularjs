'use strict';

angular.module('tiendaApp')
	// FIXME Cambiar ss por sessionStorage (se dejó así por razones demostrativas)
  	.controller('CarritoCtrl', [ '$scope', '$sessionStorage', 'compraService', function($scope, ss, compraService) {
		$scope.$storage = ss;

		this.obtenerTotal = function() {
			var total = 0;

			for (var i in ss.productos)  {
				var p = ss.productos[i];
				total += p.cantidad * p.precio;
			}

			return total;
		};

		this.comprar = function() {
			for (var i in ss.productos) {
				var p = ss.productos[i];

				compraService.comprar({
					productoId: p.id,
					nombre: p.nombre,
					cantidad: p.cantidad
				});
			}

			ss.$reset();
		};

		//$rootScope.$on('cargarProductos', cargarProductos);
	}]);
