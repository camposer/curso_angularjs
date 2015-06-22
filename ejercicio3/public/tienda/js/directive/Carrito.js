(function() {
	var app = angular.module('Tienda');
	
	app.directive('carrito', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/carrito.html',
			scope: true,
			controller: [ '$scope', '$rootScope', 'CompraService', carritoCtrl],
			controllerAs: 'carritoCtrl'
		};
	});

	var carritoCtrl = function($scope, $rootScope, compraService) {
		$scope.productos = [];

		var cargarProductos = function() {
			$scope.productos = [];
			if (sessionStorage['productos'])
				$scope.productos = JSON.parse(sessionStorage['productos']);
		};

		this.obtenerTotal = function() {
			var total = 0;

			for (var i in $scope.productos)  {
				var p = $scope.productos[i];
				total += p.cantidad * p.precio;
			}

			return total;
		};

		this.comprar = function() {
			for (var i in $scope.productos) {
				var p = $scope.productos[i];

				compraService.comprar({
					productoId: p.id,
					nombre: p.nombre,
					cantidad: p.cantidad
				});
			}

			sessionStorage['productos'] = $scope.productos = [];
		};

		$rootScope.$on('cargarProductos', cargarProductos);
		cargarProductos();
	};
})();
