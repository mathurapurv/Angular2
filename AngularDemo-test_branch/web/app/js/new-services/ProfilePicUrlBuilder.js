'use strict';

eventsApp.factory('profilePicBuilder' , function($http, $log){
	return {
		buildProfilePicUrl : function(picName){
			return 'img/'+picName+'.png';
		},
		
		fetchUserInfo : function(successcb){
			$http({method : 'GET' , url : 'data/user-info'}).
			  success( function(data, status, headers, config){
				  alert('success');
				  $log.info(data)
				  successcb(data)
			  }).
			    error( function(data, status, headers, config){
			    	alert('error');
			    	$log.info(data, status, headers, config);
			    });
			
		}
		
		
		
		
		
	};
});