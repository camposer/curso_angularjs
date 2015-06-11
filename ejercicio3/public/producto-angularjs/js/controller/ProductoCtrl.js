(function() {
	var app = angular.module('Producto');
	
	app.controller('ProductoCtrl', [ 'ProductoService', function(productoService) {
		this.productos = productoService.obtenerTodos;

		this.model = {
			id: null,
			nombre: null,
			precio: null
		};

		this.eliminar = function(id) {
			productoService.eliminar(id);
		};

		this.mostrar = function(id) {
			var p = productoService.obtener(id);
			this.model = {
				id: p.id,
				nombre: p.nombre,
				precio: p.precio
			};
		}

		this.guardar = function() {
			var p = {
				nombre: this.model.nombre,
				precio: this.model.precio
			};		

			if (this.model.id) {
				p.id = this.model.id;
				productoService.modificar(p);	
			} else {
				productoService.agregar(p);	
			}

			this.model = {
				id: null,
				nombre: null,
				precio: null
			};
			//imprimirProductos(); // automático
		};

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
})();

