package testgrails

import grails.converters.JSON;

import com.grailsinaction.User;
import com.grailsinaction.Profile;

class TestController {

	def index() {
		render "test response"
	}

	def stringUpperCase() {
		System.out.println('>>>>  gitting it .....');
		render params.inStr?  params.inStr.toUpperCase() : "-- param not found --";
	}


	def m1() {
		log.info("-- showing flash --")
		log.info(flash.message)
		flash.message="abc"+System.currentTimeMillis()
		log.info("-- Done --")
		render "m1"
	}

	def m2() {
		log.info("-- showing flash --")
		log.info(flash.message)
		//flash.message="def"+System.currentTimeMillis()
		log.info("-- Done --")
		render "m2"
	}

	def m3() {
		def seedUser = new User(userId:"userid",password:"33");
		def seedProfile = new Profile();
		render(view:"testPage1" , model : [user:seedUser , profile : seedProfile])
	}
	
	def m4() {
		log.info(">>  inside m4 ....")
		
		
		
		//
		User newUser = new User(params["user"]);
		Profile  newProfile = new Profile(params["profile"]);
		
		// validate 
		newUser.validate();
		newProfile.validate();
		
		// check error
		// print error
		if(newUser.hasErrors()) log.info "Error found in user "
		newUser.errors.allErrors.each { log.info it }
		
		if(newProfile.hasErrors()) log.info "Error found in profile "
		newProfile.errors.allErrors.each { log.info it }
		
		// save both 
		if(!newUser.hasErrors()  && !newProfile.hasErrors() ){
			newUser.save();
			newProfile.save();
		}
		
		render(view:"testPage1" , model : [user:newUser  , profile:newProfile])
	}
	
	def obtainUserInfo() {
		log.info "rendering for : "+params.userName
		def userMap = [
		"apurv" : [userName : "apurv" , password : "p1",name : "n1",emailAdd : "ksj676dhs@gmail.com",bio : "sdflkjsd@12"] as JSON,
		"vinay" : [userName : "vinay" ,password : "p3",name : "n1df",emailAdd : "ksjolkodhs@gmail.com",bio : "0989fdv@12"] as JSON,
		"saurabh" : [userName : "saurabh" ,password : "p4",name : "n1sdfsd",emailAdd : "2323ksjdhs@gmail.com",bio : "kjd87fdsf"] as JSON,
		"rajan" : [userName : "rajan" ,password : "p9",name : "n1mhjk",emailAdd : "kfgrtrg45t43sjdhs@gmail.com",bio : "ksd89f7sdf@12"] as JSON
		];
	
	   render userMap[params.userName]
		
	}
	
}
