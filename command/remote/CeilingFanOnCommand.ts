import {CeilingFan} from './CeilingFan';
import {Command} from './Command';

export class CeilingFanOnCommand implements Command {
	private ceilingFan: CeilingFan;

	constructor(ceilingFan: CeilingFan) {
		this.ceilingFan = ceilingFan;
	}

	execute(): void {
		this.ceilingFan.high();
	}
}
