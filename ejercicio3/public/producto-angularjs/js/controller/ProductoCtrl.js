app.controller('ProductoCtrl', [ 'ProductoService', function(productoService) {
	this.productos = productoService.obtenerTodos;

	var initProductoUtil = function() {
		productoService.agregar({
			nombre: 'TV',
			precio: 700
		});
		productoService.agregar({
			nombre: 'Cámara',
			precio: 300
		});
		productoService.agregar({
			nombre: 'DVD', 
			precio: 200
		});
	};

	var init = function() {
		initProductoUtil();
	};

	init();

}]);

