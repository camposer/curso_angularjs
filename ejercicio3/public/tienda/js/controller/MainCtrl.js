(function() {
	angular
	.module('Tienda')
	.controller('MainCtrl', [ '$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.tabIdx = 0;

		this.setActive = function(idx) {
			$rootScope.tabIdx = idx;
		};

		this.isActive = function(idx) {
			return $rootScope.tabIdx == idx;
		};

	}]);
})();

