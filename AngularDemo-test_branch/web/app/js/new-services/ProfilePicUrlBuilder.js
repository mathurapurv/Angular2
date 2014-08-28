'use strict';

eventsApp.factory('profilePicBuilder' , function($http, $log){
	return {
		buildProfilePicUrl : function(picName){
			return 'img/'+picName+'.png';
		},
		
		fetchUserInfo : function(userName , successcb){
			$http({method : 'GET' , url : 'http://localhost:8080/TestGrails/test/obtainUserInfo?userName='+userName}).
			  success( function(data, status, headers, config){
				  alert('data'+data);
				  successcb(data);
			  }).
			    error( function(data, status, headers, config){
			    	alert('error');
			    	$log.info(data, status, headers, config);
			    });
			
		}
		
		
		
		
		
	};
});