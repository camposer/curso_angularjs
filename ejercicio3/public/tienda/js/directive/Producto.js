(function() {
	var app = angular.module('Tienda');
	
	app.directive('producto', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/producto.html',
			controller: [ '$scope', 'ProductoService', productoCtrl],
			controllerAs: 'productoCtrl'
		};
	});

	var productoCtrl = function($scope, productoService) {
		$scope.productos = [];

		$scope.model = {
			id: null,
			nombre: null,
			precio: null
		};

		this.eliminar = function(id) {
			productoService.eliminar(id, function() {
				cargarProductos();
			});
		};

		this.mostrar = function(id) {
			productoService.obtener(id, function(p) {
				$scope.model = p;
			});
		}

		this.guardar = function() {
			var callback = function() {
				limpiarForm();
				cargarProductos();
			};

			if ($scope.model.id) 
				productoService.modificar($scope.model, callback);
			else 
				productoService.agregar($scope.model, callback);
		};

		var limpiarForm = function() {
			$scope.model = {
				id: null,
				nombre: null,
				precio: null
			};
		};

		var cargarProductos = function() {
			productoService.obtenerTodos(function(_productos) {
				$scope.productos = _productos;
			});
		};

		cargarProductos();

	};
})();

