angular.module('twitCtrl',['twitService'])
	.controller('tweetController', ['$scope', '$http', '$timeout','socketio', function($scope, $http, $timeout, socketio){
		// $scope.allTweets = tweets.getTweets();
    $http({
        method: 'GET',
        url: '/api'
      }).then(function successCallback(response) {
          $scope.allTweets = response.data;
        }, function errorCallback(response) {
          console.log(response);
          $scope.allTweets = {error : response}
        });

		socketio.on('newTweet', function(tweet){
      $scope.twt = tweet;
      $scope.allTweets.unshift($scope.twt);
		})
	}])