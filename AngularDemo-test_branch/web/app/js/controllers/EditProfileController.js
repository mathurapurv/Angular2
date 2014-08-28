'use strict';
eventsApp.controller('EditProfileController', function EditProfileController($scope,profilePicBuilder) {
	$scope.user = {};
	
	/* fill up method  */
	

	
	$scope.changeUserName = function(){
		profilePicBuilder.fetchUserInfo($scope.user.userName , function(data){
			$scope.user=data;
		});
	};
	
	
	
	
	
	$scope.getImageURL = function(picName){
		return profilePicBuilder.buildProfilePicUrl(picName);
	};
	
	

});