'use strict';

angular.module('mytacksApp')
.controller('HomeCtrl', function($scope, User, $http, Session, $location){

	//$scope.user = currentUser.name || '';

	// $http.get('/api/users/me').success(function(user) {
 //      $scope.user = user.name;
 //      console.dir(user);
 //    });
	$scope.setMaster = function(boards) {
    $scope.selected = boards;
	};

	$scope.isSelected = function(boards) {
    return $scope.selected === boards;
	};

	$scope.formData = {};
	$scope.addTack = function(){
		
		$http.post('/api/addtack', $scope.formData)
		.success(function(){
			alert("Added Tack");
			//$scope.posts = $http.get('/api/posts').success(function(data){$scope.posts = data;});
		});
		// $scope.posts.push($scope.post);
		// $scope.post = {url : "http://", title: ""};
	};

	$scope.addBoard = function(){
		$http.post('/api/addboard', $scope.formData)
		.success(function(){ 

			alert("Added Board");
			window.location.href = "/dashboard"
		});
	};

	$scope.removeBoard = function(){
		$http.post('/api/removeboard', $scope.formData)
		.success(function(){ 
			alert("Removed Board");
			window.location.href = "/dashboard"
		});
	};

});