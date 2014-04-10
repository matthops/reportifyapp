'use strict';

angular.module('reportifyApp', ['ui.router', 'firebase']).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('main', {
				url: "/",
				controller: 'ReportsCtrl',
				templateUrl: 'views/main.html',
			})
			.state('article', {
				url: '/report/:reportId/articleinfo',
				controller: 'articleInfoCtrl',
				templateUrl: 'views/articleinfo.html',
			})
			.state('reportView', {
				url: '/report/:reportId/view',
				controller: 'ReportviewCtrl',
				templateUrl: 'views/reportview.html',
			});
})
// .config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ]);