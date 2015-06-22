(function() {
	angular
	.module('Producto')
	.controller('CatalogoCtrl', [ '$scope', 'ProductoService', function($scope, productoService) {
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
		};

		cargarProductos();
	}]);
})();

