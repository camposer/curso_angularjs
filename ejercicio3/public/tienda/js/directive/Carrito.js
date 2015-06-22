(function() {
	var app = angular.module('Producto');
	
	app.directive('carrito', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/carrito.html'
		};
	});
})();
