var myApp = angular.module('appInProgress',[
	'ngRoute'
]);

myApp.directive('main', function(){
	return {
		restrict: 'E', 
		templateUrl: 'views/main.html',
	};
});