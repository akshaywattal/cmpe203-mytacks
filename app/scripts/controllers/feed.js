'use strict';

angular.module('mytacksApp')
  .controller('FeedCtrl', function ($scope, $http) {
    $http.get('/api/feed').success(function(feed) {
      $scope.feed = feed;
    });
  });