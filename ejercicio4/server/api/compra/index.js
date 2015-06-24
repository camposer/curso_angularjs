'use strict';

var express = require('express');
var controller = require('./compra.controller');

var router = express.Router();

//router.get('/', controller.obtenerCompras);
router.get('/', controller.obtenerComprasPorProducto);
router.post('/', controller.agregarCompra);

module.exports = router;