export class Hottub {
	private activate: boolean;
	private temperature: number;

	on(): void {
		this.activate = true;
	}

	off(): void {
		this.activate = false;
	}

	bubblesOn(): void {
		if (this.activate) {
			console.log('Hottub is bubbling!');
		}
	}

	bubblesOff(): void {
		if (!this.activate) {
			console.log('Hottub is not bubbling');
		}
	}

	jetsOn(): void {
		if (this.activate) {
			console.log('Hottub jets are on');
		}
	}

	jetsOff(): void {
		if (!this.activate) {
			console.log('Hottub jets are off');
		}
	}

	setTemperature(temperature: number) {
		this.temperature = temperature;
	}

	heat(): void {
		this.temperature = 105;
		console.log('Hottub is heating to a steaming 105 degrees');
	}

	cool(): void {
		this.temperature = 98;
		console.log('Hottub is cooling to 98 degrees');
	}
}
