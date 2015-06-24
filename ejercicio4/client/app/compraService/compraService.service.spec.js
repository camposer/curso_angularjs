'use strict';

describe('Service: compraService', function () {

  // load the service's module
  beforeEach(module('tiendaApp'));

  // instantiate service
  var compraService;
  beforeEach(inject(function (_compraService_) {
    compraService = _compraService_;
  }));

  it('should do something', function () {
    expect(!!compraService).toBe(true);
  });

});
