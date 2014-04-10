'use strict';

describe('Directive: DVHeadline', function () {

  // load the directive's module
  beforeEach(module('reportifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-d-v-headline></-d-v-headline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the DVHeadline directive');
  }));
});
