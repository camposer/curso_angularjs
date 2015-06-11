(function() {
	var app = angular.module('Producto');
	
	app.directive('formProducto', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/form-producto.html'
		};
	});
})();

