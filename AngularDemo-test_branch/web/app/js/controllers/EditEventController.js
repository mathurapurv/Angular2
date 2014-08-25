'use strict';
editEvents.controller('EditEventController',
		function EditEventController($scope) {
	
				$scope.saveEvent = function(event , newEventForm){ 	
					if(newEventForm.$valid){
						alert('Name : '+event.eventName)
					}else{
						alert('Invalid form ');
					}
					
				}
				
				$scope.cancelEdit = function(){ 					
					location.reload();
				}
			

		});