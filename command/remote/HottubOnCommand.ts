import {Command} from './Command';
import {Hottub} from './Hottub';

export class HottubOnCommand implements Command {
	private hottub: Hottub;

	constructor(hottub: Hottub) {
		this.hottub = hottub;
	}

	execute(): void {
		this.hottub.heat();
		this.hottub.on();
		this.hottub.bubblesOn();
	}
}
