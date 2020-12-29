import {Command} from './Command';
import {Stereo} from './Stereo';

export class StereoOnWithCDCommand implements Command {
	private stereo: Stereo;

	constructor(stereo: Stereo) {
		this.stereo = stereo;
	}

	execute(): void {
		this.stereo.on();
		this.stereo.setCD();
		this.stereo.setVolume(11);
	}
}
