(function() {
	var app = angular.module('Producto');
	
	app.directive('catalogo', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/catalogo.html'
		};
	});
})();
