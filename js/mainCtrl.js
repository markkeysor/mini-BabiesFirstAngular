var app = angular.module('friendsList');

app.controller("mainCtrl", function($scope) {
	$scope.friends = ["Mark", "Kevin", "Stanley"];
});