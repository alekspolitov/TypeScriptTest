/// <reference path="typings/index.d.ts" />
///https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/
//import $ = require("jquery");
//import Core = require("./modules/module1");

//--/// <reference path="./modules/module1.ts" />

import { UserModule }  from "./modules/module1";
import * as $ from "jquery";

export namespace  App {
	interface IEntity{
		readonly id?: string;
		name?: string;
	}
	export class Greeter<T> {

        static GLOBAL: string = "GLOBAL2";
		greeting: T;
		constructor(message: T) {
			this.greeting = message;
		}
		greet() {
			let y: number | undefined;
			let x: IEntity  = { id: "id1", name: "name1"};
			let name = x!.name;


			//var data: string = <string><any>this.greeting;
			$("#content").append(<string><any>this.greeting);
			return this.greeting;
		}
	
		getUser(): string {

			var model = new UserModule.UserModel("Aleks Politov", 1);
			$("#content").append(model.toString() + "<br/>");

			return model.toString() + UserModule.SampleFunc();
		}

	}
}

var sample = new App.Greeter<string>("text");
window.setInterval(() => sample.getUser(), 2000);

