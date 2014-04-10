'use strict';

describe('Service: Enterinfo', function () {

  // load the service's module
  beforeEach(module('reportifyApp'));

  // instantiate service
  var Enterinfo;
  beforeEach(inject(function (_Enterinfo_) {
    Enterinfo = _Enterinfo_;
  }));

  it('should do something', function () {
    expect(!!Enterinfo).toBe(true);
  });

});
