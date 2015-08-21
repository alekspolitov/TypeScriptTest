module Services {
	export class MyService {
		private serviceName: string;

		constructor(serviceName: string) {
			this.serviceName = serviceName;
		}

		DoAnything(): string {
			return "sample text";
		}
	}
}
