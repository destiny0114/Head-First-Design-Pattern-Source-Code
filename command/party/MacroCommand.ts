import {Command} from './Command';

export class MacroCommand implements Command {
	private commands: Command[];

	constructor(commands: Command[]) {
		this.commands = commands;
	}

	execute(): void {
		for (let i = 0; i < this.commands.length; i++) {
			this.commands[i].execute();
		}
	}

	/**
	 * NOTE:  these commands have to be done backwards to ensure
	 * proper undo functionality
	 */
	undo(): void {
		for (let i = this.commands.length - 1; i >= 0; i--) {
			this.commands[i].undo();
		}
	}
}
