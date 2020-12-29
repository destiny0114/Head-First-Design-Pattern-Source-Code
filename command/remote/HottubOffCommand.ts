import {Command} from './Command';
import {Hottub} from './Hottub';

export class HottubOffCommand implements Command {
	private hottub: Hottub;

	constructor(hottub: Hottub) {
		this.hottub = hottub;
	}

	execute(): void {
		this.hottub.cool();
		this.hottub.off();
		this.hottub.bubblesOff();
	}
}
