'use strict';

angular.module('reportifyApp')
  .controller('ReportviewCtrl', function ($scope, $firebase, $location, $stateParams) {
  	console.log($stateParams.reportId);
    var EnterArticleInfo = new Firebase("https://reportifyapp.firebaseio.com/" + $stateParams.reportId);
  	$scope.report = $firebase(EnterArticleInfo);
    $scope.articles = $scope.report.$child("articles");


// $scope.report.$add(reportId).then(function(ref) {
//         $location.path("/report/"+ref.name()+'/view');
  });
