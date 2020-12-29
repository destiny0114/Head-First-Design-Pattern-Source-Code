import {Command} from './Command';
import {TV} from './TV';

export class TVOffCommand implements Command {
	private tv: TV;

	constructor(tv: TV) {
		this.tv = tv;
	}

	execute(): void {
		this.tv.off();
	}

	undo(): void {
		this.tv.on();
	}
}
