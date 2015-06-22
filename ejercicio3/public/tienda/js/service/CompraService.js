(function() {
	const URL_BASE = '/compras';

	angular
	.module('Tienda')
	.service('CompraService', [ '$http', function CompraService($http) {
		this.comprar = function(p) {
			$http.post(URL_BASE, p);
		};

	}]);

})();