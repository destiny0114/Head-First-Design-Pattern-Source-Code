import {Amplifier} from './Amplifier';

export class CdPlayer {
	private description: string;
	private currentTrack: number;
	private amplifier: Amplifier;
	private title: string;

	constructor(description: string, amplifier: Amplifier) {
		this.description = description;
		this.amplifier = amplifier;
	}

	on(): void {
		console.log(this.description + ' on');
	}

	off(): void {
		console.log(this.description + ' off');
	}

	eject(): void {
		this.title = null;
		console.log(this.description + ' eject');
	}

	playWithTitle(title: string): void {
		this.title = title;
		this.currentTrack = 0;
		console.log(this.description + ' playing "' + title + '"');
	}

	playWithTrack(track: number) {
		if (this.title == null) {
			console.log(this.description + " can't play track " + this.currentTrack + ', no cd inserted');
		} else {
			this.currentTrack = track;
			console.log(this.description + ' playing track ' + this.currentTrack);
		}
	}

	stop(): void {
		this.currentTrack = 0;
		console.log(this.description + ' stopped');
	}

	pause(): void {
		console.log(this.description + ' paused "' + this.title + '"');
	}

	toString(): string {
		return this.description;
	}
}
