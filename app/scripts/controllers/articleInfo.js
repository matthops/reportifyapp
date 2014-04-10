'use strict'


angular.module('reportifyApp')
  .controller('articleInfoCtrl', function ($scope, $firebase, $location, $stateParams) {
    // $scope.article = {};
    //grab the id from rootScope
    //build a firebase url with that id
  	var EnterArticleInfo = new Firebase("https://reportifyapp.firebaseio.com/" + $stateParams.reportId);
  	$scope.report = $firebase(EnterArticleInfo);
    $scope.articleList = $scope.report.$child("articles");

	$scope.clickedEnter = function() {
    console.log($scope.article);
		$scope.articleList.$add($scope.article);

	};
  $scope.clickedViewReport = function(ref) {
    $location.path("/report/"+$stateParams.reportId+'/view');
  };

  // $scope.loadingArticle = false;
  // $scope.autoComplete = function() {
    // if(!$scope.article.url || $scope.article.url.length < 3) 
    //   return;
    //   // $scope.article.headline = " ";
    //   // $scope.article.outlet = " ";
    //   // $scope.article.author = " ";
    //   // $scope.article.date = " ";
    //   // $scope.article.text = " ";
    //   // $scope.article.circ = " ";
    //   $scope.loadingArticle = true;
  //     Scrapearticle.scrapeUrl($scope.article.url, function(success, data){
  //       //code to call when it comes back
  //       if(success){
  //           $scope.article = data;
  //       }

  //       $scope.loadingArticle = false;
  //     });

  // };

    // var enterData = new Firebase("https://reportifyapp.firebaseio.com/report/");
 ///ng-click\
  });
