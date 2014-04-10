'use strict';

describe('Controller: EnterinfoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('reportifyApp'));

  var EnterinfoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnterinfoctrlCtrl = $controller('EnterinfoctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
