(function() {
	angular
	.module('Producto')
	.controller('InicioCtrl', [ '$scope', function($scope) {
		var idx = 0;

		this.setActive = function(_idx) {
			idx = _idx;
		};

		this.isActive = function(_idx) {
			return idx == _idx;
		}

	}]);
})();

