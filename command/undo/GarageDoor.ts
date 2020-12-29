export class GarageDoor {
	private location: string;
	constructor(location: string) {
		this.location = location;
	}
	up(): void {
		console.log('Garage Door is Open');
	}

	down(): void {
		console.log('Garage Door is Closed');
	}

	stop(): void {
		console.log('Garage Door is Stopped');
	}

	lightOn(): void {
		console.log('Garage light is on');
	}

	lightOff(): void {
		console.log('Garage light is off');
	}
}
