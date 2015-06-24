'use strict';

angular.module('tiendaApp')
	.service('productoService', [ '$http', function($http) {
		var URL_BASE = '/api/productos';
		
		this.agregar = function(p, callback) {
			$http.post(URL_BASE, p).success(callback);
		};

		this.modificar = function(p, callback) {
			$http.put(URL_BASE + '/' + p.id, p).success(callback);
		};

		this.eliminar = function(id, callback)  {
			$http.delete(URL_BASE + '/' + id).success(callback);
		};

		this.obtener = function(id, callback) {
			$http.get(URL_BASE + '/' + id).success(callback);
		};


		this.obtenerTodos = function(callback) {
			$http.get(URL_BASE).success(callback);
		};

	}]);
