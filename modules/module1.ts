
	 export class UserModel {
		private name: string = "";
		private id: number = 0;
		constructor(name: string, id: number) {
			this.id = id;
			this.name = name;
		}
		toString():string {
			return this.id + "|" + this.name;
		}
	}
	
	export function SampleFunc(){
		return "";
	}


	
