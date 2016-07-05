angular.module('router',['ngRoute']).config(function($routeProvider){	
	$routeProvider
	.when('/',{
		templateUrl : '/views/partials/home.html',
		controller : 'tweetController'
	})
})