'use strict';
exploreDirectives.controller('ExploreDirectivesController',
		function ExploreDirectivesController($scope) {
			$scope.mainHeading = 'Lets Explore Angular Directives';
			$scope.inputVal = '';
			$scope.outputVal = '';
			$scope.counter = $scope.inputVal.length;
			$scope.isStrongStr = false;

			$scope.inputChangeHandler = function() {
				$scope.counter = $scope.inputVal.length;
				$scope.outputVal = $scope.inputVal.toUpperCase();
				$scope.isStrongStr = ($scope.inputVal.length > 10);

			};

		});