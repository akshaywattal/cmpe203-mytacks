// Name: home.js 
// Description: This is main javascript for consisiting of HomeCtrl
// API: /api/addtack, /api/addboard, /api/addboard, /api/removeboard, /api/deletetack, /api/updatetack
'use strict';

angular.module('mytacksApp')
.controller('HomeCtrl', function($scope, User, $http, Session, $location, $rootScope){

	$scope.user = $rootScope.currentUser;

	// Scope user 
	$scope.setMaster = function(boards) {
    $scope.selected = boards;
	};

	$scope.isSelected = function(boards) {
    return $scope.selected === boards;
	};

	// Adding a Tack
	$scope.formData = {};
	$scope.addTack = function(){
		
		$http.post('/api/addtack', $scope.formData)
		.success(function(){
			alert("Added Tack");
		});
	};

	// Adding a Board
	$scope.addBoard = function(){
		$http.post('/api/addboard', $scope.formData)
		.success(function(){ 

			alert("Added Board");
			window.location.href = "/dashboard"
		});
	};

	// Removing a Board
	$scope.removeBoard = function(){
		$http.post('/api/removeboard', $scope.formData)
		.success(function(){ 
			alert("Removed Board");
			window.location.href = "/dashboard"
		});
	};

	// Removing a Tack
	$scope.deleteTack = function(){
		$http.post('/api/deletetack', $scope.formData)
		.success(function(){ 
			alert("Removed Tack");
			window.location.href = "/dashboard"
		});
	};

	// Updating a Tack
	$scope.updateTack = function(){
		$http.post('/api/updatetack', $scope.formData)
		.success(function(){ 
			alert("Updated Tack");
			window.location.href = "/dashboard"
		});
	};

	/*$scope.deleteTack = function(link){
        debugger; 
		$http.delete('/api/deletetack/'+ $scope.tack.link).success(function(){
			alert('Tack Deleted');
		});
	};*/
});