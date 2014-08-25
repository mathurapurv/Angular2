
eventsApp.factory('eventData' , function(){
	return {
		event  : {
			name: 'Angular boot camp',
			date : '24 Jan 2014',
			time : '10:46 AM',
			imageUrl : 'img/logo.png',
			location : {
							address : 'google plex',
							city : 'Palo Alto',
							state : 'California'		
						},
			sessions : [
			              {
			            	  name : 'Angular JS 1',
			            	  creatorName : 'presenter 1',
			            	  duration : '1 hr',
			            	  level : 'B',
			            	  abstract : 'introduction to AngularJS',
			            	  upVoteCount : 5
			              },
			              {
			            	  name : 'Angular JS 2',
			            	  creatorName : 'presenter 2',
			            	  duration : '3 hr',
			            	  level : 'A',
			            	  abstract : 'introduction to AngularJS 2',
			            	  upVoteCount : 34
			              },
			              {
			            	  name : 'Angular JS 3',
			            	  creatorName : 'presenter 3',
			            	  duration : '5 hr',
			            	  level : 'C',
			            	  abstract : 'introduction to AngularJS 3',
			            	  upVoteCount : 10
			              },
			              {
			            	  name : 'Angular JS 4',
			            	  creatorName : 'presenter 4',
			            	  duration : '8 hr',
			            	  level : 'A',
			            	  abstract : 'introduction to AngularJS 32',
			            	  upVoteCount : 0
			              }
			            ],			
			presenters : [ 
							{Name : 'Adam' , field : 'Java' , level : 'expert' , experience : '12 years'},
							{Name : 'james' , field : 'C++' , level : 'Master' , experience : '2 years'},
							{Name : 'Jack' , field : '.Net' , level : 'Int' , experience : '1 years'},
							{Name : 'Ruth' , field : 'VB' , level : 'Novice' , experience : '10 years'},
							{Name : 'Amy' , field : 'SQL' , level : 'expert' , experience : '33 years'}
						]		
					}
		
	};
	
});