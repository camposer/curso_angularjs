'use strict';

angular.module('tiendaApp')
  	.controller('CarritoCtrl', [ '$scope', '$sessionStorage', 'compraService', function($scope, $sessionStorage, compraService) {
		$scope.$storage = $sessionStorage;

		this.obtenerTotal = function() {
			var total = 0;

			for (var i in $sessionStorage.productos)  {
				var p = $sessionStorage.productos[i];
				total += p.cantidad * p.precio;
			}

			return total;
		};

		this.comprar = function() {
			for (var i in $sessionStorage.productos) {
				var p = $sessionStorage.productos[i];

				compraService.comprar({
					productoId: p.id,
					nombre: p.nombre,
					cantidad: p.cantidad
				});
			}

			$sessionStorage.$reset();
		};

		//$rootScope.$on('cargarProductos', cargarProductos);
	}]);
