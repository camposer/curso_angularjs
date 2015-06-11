(function() {
	var app = angular.module('Producto');
	
	app.directive('listaProductos', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/lista-productos.html'
		};
	});
})();
