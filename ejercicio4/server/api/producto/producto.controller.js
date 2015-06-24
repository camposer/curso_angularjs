'use strict';

var _ = require('lodash');

var productoUtil = require("../../lib/productoUtil");

var inicializar = function() {
	productoUtil.agregar({
			nombre: "Portátiles",
			precio: 300
		});
	productoUtil.agregar({
			nombre: "DVD",
			precio: 200
		});
	productoUtil.agregar({
			nombre: "Cámaras",
			precio: 100
		});

};

inicializar();

/************* Funciones de ProductoUtil ***************/
exports.obtenerProductos = function(req, res) {
	res.json(productoUtil.obtenerTodos());
};

exports.agregarProducto = function(req, res) {
	var p = req.body;

	productoUtil.agregar(p);

	res.send(); // Podría devolverse un objeto con el estatus
};

exports.modificarProducto = function(req, res) {
	var params = req.params;
	var p = req.body;

	p.id = params.id; // Añadiendo el id

	productoUtil.modificar(p);

	res.send(); // Podría devolverse un objeto con el estatus
};

exports.eliminarProducto = function(req, res) {
	var params = req.params;

	productoUtil.eliminar(params.id);

	res.send(); // Podría devolverse un objeto con el estatus
};

exports.obtenerProducto = function(req, res) {
	var params = req.params;

	res.json(productoUtil.obtener(params.id));
}
