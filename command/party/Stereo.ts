export class Stereo {
	private volume: number;
	private location: string;

	constructor(location: string) {
		this.location = location;
	}

	on(): void {
		console.log(this.location + ' Stereo is On');
	}

	off(): void {
		console.log(this.location + ' Stereo is Off');
	}

	setCD(): void {
		console.log(this.location + ' Stereo is set for CD input');
	}

	setDVD(): void {
		console.log(this.location + ' Stereo is set for DVD input');
	}

	setVolume(volume: number): void {
		this.volume = volume;
		console.log(this.location + ' Stereo Volume is set to ' + this.volume);
	}
}
