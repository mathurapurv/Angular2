'use strict';
var eventsApp = angular.module('eventsApp', ['ngRoute'])
				.config(function($routeProvider){
					$routeProvider.when('/newUser',
					{
						  templateUrl : 'templates/NewUser.html',
						  controller : 'NewUSerController'
					})
				});






var exploreDirectives = angular.module('exploreDirectives', []);
var editEvents = angular.module('editEvents', []);
