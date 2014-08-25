'use strict';
eventsApp.controller('EditProfileController', function EditProfileController($scope,profilePicBuilder) {
	$scope.user = {};
	
	/* fill up method  */
	
	profilePicBuilder.fetchUserInfo(function(data){
		
		
	})
	
	
	
	
	
	$scope.getImageURL = function(picName){
		return profilePicBuilder.buildProfilePicUrl(picName);
	};
	
	

});