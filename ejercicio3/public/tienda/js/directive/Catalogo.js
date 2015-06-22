(function() {
	var app = angular.module('Tienda');
	
	app.directive('catalogo', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/catalogo.html',
			scope: true,
			controller: [ '$scope', '$rootScope', 'ProductoService', catalogoCtrl ],
			controllerAs: 'catalogoCtrl'
		};
	});

	var catalogoCtrl = function($scope, $rootScope, productoService) {
		$scope.productos = [];

		var cargarProductos = function() {
			productoService.obtenerTodos(function(_productos) {
				for (var i in _productos) {
					var p = _productos[i];
					p.cantidad = 0;
					$scope.productos.push(p);
				}
			});
		};

		this.agregar = function() {
			var productosCarrito = [];
			for (var i in $scope.productos) {
				var p = $scope.productos[i];
				if (p.cantidad > 0)
					productosCarrito.push(p);
			}

			sessionStorage['productos'] = JSON.stringify(productosCarrito);
			$rootScope.tabIdx = 1;
		};

		cargarProductos();
	};
})();
