/// <reference path="typings/tsd.d.ts" />
///https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/
import $ = require("jquery");
import Core = require("./modules/module1");


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
			
			var model = new Core.UserModel("Aleks Politov", 1);
			$("#content").append(model.toString());
			return model.toString() + Core.SampleFunc();
		}
		
	}
}

var sample = new App.Greeter<string>("text");
window.setInterval(() => sample.getUser(), 2000);

