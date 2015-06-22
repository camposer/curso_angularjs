(function() {
	const URL_BASE = '/compras';

	angular
	.module('Producto')
	.service('CompraService', [ '$http', function CompraService($http) {
		this.comprar = function(p) {
			$http.post(URL_BASE, p);
		};

	}]);

})();