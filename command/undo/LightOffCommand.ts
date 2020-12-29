import {Command} from './Command';
import {Light} from './Light';

export class LightOffCommand implements Command {
	private light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	execute(): void {
		this.light.off();
	}

	undo(): void {
		this.light.on();
	}
}
