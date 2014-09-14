'use strict';

eventsApp.factory('answerPrayer' , function($http, $log , $q){
		return {
					
			answerPrayerFromJesus : function(query){
				var deferred = $q.defer();
				$http({
							method : 'GET',
							url : 'http://localhost:8080/TestGrails/test/answerPrayerFromJesus?query='+ query
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;
			}
		};
});