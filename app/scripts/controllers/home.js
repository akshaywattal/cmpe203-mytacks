'use strict';

angular.module('mytacksApp')
.controller('HomeCtrl', function($scope, User, $http, Session, $location, $rootScope){

	$scope.user = $rootScope.currentUser;
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

			alert('Added Tack');
			//$scope.posts = $http.get('/api/posts').success(function(data){$scope.posts = data;});
		});
		// $scope.posts.push($scope.post);
		// $scope.post = {url : "http://", title: ""};
	};

	$scope.deleteTack = function(link){
        debugger; 
		$http.delete('/api/deletetack/'+ $scope.tack.link).success(function(){
			alert('Tack Deleted');
		});
	};
});