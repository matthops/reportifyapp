'use strict';

describe('Service: Scrapearticle', function () {

  // load the service's module
  beforeEach(module('reportifyApp'));

  // instantiate service
  var Scrapearticle;
  beforeEach(inject(function (_Scrapearticle_) {
    Scrapearticle = _Scrapearticle_;
  }));

  it('should do something', function () {
    expect(!!Scrapearticle).toBe(true);
  });

});
