//import Service = require('./services/services');

//--/// <reference path="./services/services.ts" />
import { Services } from "./services/services";

export namespace UserModule {
	export class UserModel {
		private name: string = "";
		private id: number = 0;
		constructor(name: string, id: number) {
			this.id = id;
			this.name = name;
		}

		toString(): string {
			return this.id + "|" + this.name;
		}

		callService(): void {
			var service = new Services.MyService("My Super Service");
			service.DoAnything();
		}
	}

	export function SampleFunc() {
		return "";
	}
}
