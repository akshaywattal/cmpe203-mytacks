'use strict';

angular.module('mytacksApp')
.controller('HomeCtrl', function($scope, User, $http, Session, $location){

	//$scope.user = currentUser.name || '';

	// $http.get('/api/users/me').success(function(user) {
 //      $scope.user = user.name;
 //      console.dir(user);
 //    });
	$scope.formData = {};
	$scope.addTack = function(){

		debugger;

		$http.post('/api/addtack', $scope.formData)
		.success(function(){ 
			//$scope.posts = $http.get('/api/posts').success(function(data){$scope.posts = data;});
		});
		// $scope.posts.push($scope.post);
		// $scope.post = {url : "http://", title: ""};
	};
});