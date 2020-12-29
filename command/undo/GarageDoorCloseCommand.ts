import {Command} from './Command';
import {GarageDoor} from './GarageDoor';

export class GarageDoorCloseCommand implements Command {
	private garageDoor: GarageDoor;

	constructor(garageDoor: GarageDoor) {
		this.garageDoor = garageDoor;
	}

	execute(): void {
		this.garageDoor.down();
	}

	undo(): void {
		this.garageDoor.up();
	}
}
