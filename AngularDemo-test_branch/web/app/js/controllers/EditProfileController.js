'use strict';
eventsApp.controller('EditProfileController', function EditProfileController($scope,profilePicBuilder , answerPrayer) {
	$scope.user = {};
	$scope.prayer = {};
	
	/* fill up method  */
	

	
	$scope.changeUserName = function(){
		profilePicBuilder.fetchUserInfo($scope.user.userName , function(data){
			$scope.user=data;
		});
	};
	
	$scope.getImageURL = function(picName){
		return profilePicBuilder.buildProfilePicUrl(picName);
	};
	
	$scope.sendPrayer = function(){
		answerPrayer.answerPrayerFromJesus($scope.prayer.question).then(
						function(data){$scope.prayer.reply = data;} , 
						function(statusCode){console.log(statusCode)}
						
		);
	};
	
	

});