'use strict';

describe('Controller: ReportviewCtrl', function () {

  // load the controller's module
  beforeEach(module('reportifyApp'));

  var ReportviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportviewCtrl = $controller('ReportviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
