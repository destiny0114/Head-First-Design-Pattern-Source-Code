import {Command} from './Command';
import {Hottub} from './Hottub';

export class HottubOffCommand implements Command {
	private hottub: Hottub;

	constructor(hottub: Hottub) {
		this.hottub = hottub;
	}

	execute(): void {
		this.hottub.off();
		this.hottub.cool();
		this.hottub.bubblesOff();
	}

	undo(): void {
		this.hottub.on();
		this.hottub.heat();
		this.hottub.bubblesOn();
	}
}
