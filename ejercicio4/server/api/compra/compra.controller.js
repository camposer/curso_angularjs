'use strict';

var _ = require('lodash');
var compraUtil = require("../../lib/compraUtil");

exports.obtenerCompras = function(req, res) {
	res.json(compraUtil.obtenerTodas());
};

exports.obtenerComprasPorProducto = function(req, res) {
	res.json(compraUtil.obtenerTodasPorProducto());
};

exports.agregarCompra = function(req, res) {
	var c = req.body;

	compraUtil.agregar(c);

	res.send(); // Podría devolverse un objeto con el estatus
};