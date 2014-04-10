'use strict';

angular.module('reportifyApp')
  .directive('dvArticleCards', function () {
    return {
      // template: <div>

      // 			</div>,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dvArticleCards directive');
      }
    };
  });
