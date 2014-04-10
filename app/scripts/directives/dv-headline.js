'use strict';

angular.module('reportifyApp')
  .directive('DVHeadline', function () {
    return {
      template: '<div>{{ headlineText }}</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.headlineText = attrs.text;
      }
    };
  });
