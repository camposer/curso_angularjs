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
		// TODO Mejorar validaciones de precio
		if (/[a-z0-9 ]{2,}/i.test(this.model.nombre) && 
				/[0-9]+/.test(this.model.precio)) {
				
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
		} else {
				window.alert("Nombre o precio inválido");
		}
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

