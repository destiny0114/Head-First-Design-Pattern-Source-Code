import {Command} from './Command';
import {Hottub} from './Hottub';

export class HottubOnCommand implements Command {
	private hottub: Hottub;

	constructor(hottub: Hottub) {
		this.hottub = hottub;
	}

	execute(): void {
		this.hottub.on();
		this.hottub.heat();
		this.hottub.bubblesOn();
	}

	undo(): void {
		this.hottub.off();
		this.hottub.cool();
		this.hottub.bubblesOff();
	}
}
