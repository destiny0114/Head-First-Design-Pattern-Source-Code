export class Light {
	private location: string = '';

	constructor(location: string) {
		this.location = location;
	}
	on(): void {
		console.log('Light is on');
	}

	off(): void {
		console.log('Light is off');
	}
}
