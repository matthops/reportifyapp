'use strict';

describe('Directive: dvArticleCards', function () {

  // load the directive's module
  beforeEach(module('reportifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-article-cards></dv-article-cards>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvArticleCards directive');
  }));
});
