import {Command} from './Command';

export class SimpleRemoteControl {
	private slot: Command;

	constructor() {}

	setCommand(command: Command): void {
		this.slot = command;
	}

	buttonWasPressed(): void {
		this.slot.execute();
	}
}
