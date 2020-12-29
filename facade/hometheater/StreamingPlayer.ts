import {Amplifier} from './Amplifier';

export class StreamingPlayer {
	private description: string;
	private currentChapter: number;
	private amplifier: Amplifier;
	private movie: string;

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

	playWithMovie(movie: string): void {
		this.movie = movie;
		this.currentChapter = 0;
		console.log(this.description + ' playing "' + movie + '"');
	}

	playWithChapter(chapter: number) {
		if (this.movie == null) {
			console.log(this.description + " can't play chapter " + chapter + ' no movie selected');
		} else {
			this.currentChapter = chapter;
			console.log(this.description + ' playing chapter ' + this.currentChapter + ' of "' + this.movie + '"');
		}
	}

	stop(): void {
		this.currentChapter = 0;
		console.log(this.description + ' stopped "' + this.movie + '"');
	}

	pause(): void {
		console.log(this.description + ' paused "' + this.movie + '"');
	}

	setTwoChannelAudio(): void {
		console.log(this.description + ' set two channel audio');
	}

	setSurroundAudio(): void {
		console.log(this.description + ' set surround audio');
	}

	toString(): string {
		return this.description;
	}
}
