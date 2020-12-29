export class TV {
	private location: string;
	private channel: number;

	constructor(location: string) {
		this.location = location;
	}

	on() {
		console.log('TV is on');
	}

	off() {
		console.log('TV is off');
	}

	setInputChannel() {
		this.channel = 3;
		console.log('Channel is set for VCR');
	}
}
