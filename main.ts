/// <reference path="typings/tsd.d.ts" />

import $ = require("jquery");
import userModel = require("./modules/module1");

module App {
	export class Greeter<T> {
        
        static GLOBAL: string = "GLOBAL2";
    	greeting: T;
    	constructor(message: T) {
        	this.greeting = message;
    	}
	    greet() {
	    	//var data: string = <string><any>this.greeting;
	    	$("#content").append( <string><any>this.greeting);
	        return this.greeting;
	    }
		getUser(): string {
			var model = new userModel.Core.UserModel("Aleks Politov", 1);
			$("#content").append(model.toString());
			return model.toString();
		}
		
	}
}

var sample = new App.Greeter<string>("text");
window.setInterval(() => sample.getUser(), 2000);

