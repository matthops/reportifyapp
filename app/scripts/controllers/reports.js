'use strict'

angular.module('reportifyApp')
  .controller('ReportsCtrl', function ($scope, $firebase, $rootScope, $location) {
    var singleReportRef = new Firebase("https://reportifyapp.firebaseio.com/");
    $scope.report = $firebase(singleReportRef);


  	$scope.reportClick = function () {
      console.log("raeport click");
  		var reportId = {
  			name: $scope.name,
  			client: $scope.client
  		};

  		$scope.report.$add(reportId).then(function(ref) {
        $location.path("/report/"+ref.name()+'/articleinfo');
      }); 
    }
});
  // 	//	//$rootScope.currentReport = 
  // 	//
