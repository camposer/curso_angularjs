'use strict';

var express = require('express');
var controller = require('./producto.controller');

var router = express.Router();

router.get('/', controller.obtenerProductos);
router.get('/:id', controller.obtenerProducto);
router.post('/', controller.agregarProducto);
router.put('/:id', controller.modificarProducto);
router.delete('/:id', controller.eliminarProducto);

module.exports = router;