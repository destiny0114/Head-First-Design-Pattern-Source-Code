import {CeilingFan} from './CeilingFan';
import {Command} from './Command';

export class CeilingFanLowCommand implements Command {
	private ceilingFan: CeilingFan;
	private prevSpeed: number;

	constructor(ceilingFan: CeilingFan) {
		this.ceilingFan = ceilingFan;
	}

	execute(): void {
		this.prevSpeed = this.ceilingFan.getSpeed();
		this.ceilingFan.low();
	}

	undo(): void {
		if (this.prevSpeed == CeilingFan.HIGH) {
			this.ceilingFan.high();
		} else if (this.prevSpeed == CeilingFan.MEDIUM) {
			this.ceilingFan.medium();
		} else if (this.prevSpeed == CeilingFan.LOW) {
			this.ceilingFan.low();
		} else if (this.prevSpeed == CeilingFan.OFF) {
			this.ceilingFan.off();
		}
	}
}
