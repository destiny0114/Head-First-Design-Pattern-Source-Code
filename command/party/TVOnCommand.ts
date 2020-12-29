import {Command} from './Command';
import {TV} from './TV';

export class TVOnCommand implements Command {
	private tv: TV;

	constructor(tv: TV) {
		this.tv = tv;
	}

	execute(): void {
		this.tv.on();
		this.tv.setInputChannel();
	}

	undo(): void {
		this.tv.off();
	}
}
