function Producto(_nombre, _precio) {
	var id;
	var nombre = _nombre;
	var precio = _precio;
	var cantidad;

	this.setId = function(i) { id = i; };
	this.getId = function() { return id; };
	this.setNombre = function(i) { nombre = i; };
	this.getNombre = function() { return nombre; };
	this.setPrecio = function(i) { precio = i; };
	this.getPrecio = function() { return precio; };
	this.setCantidad = function(i) { cantidad = i; };
	this.getCantidad = function() { return cantidad; };

	this.toString = function() {
		return "[ id = " + id + 
			", nombre = " + nombre +
			", precio = " + precio + 
			", cantidad = " + cantidad + " ]";
	};
}