import {Command} from './Command';
import {NoCommand} from './NoCommand';

export class RemoteControl {
	private onCommands: Command[];
	private offCommands: Command[];

	constructor() {
		this.onCommands = new Array(7);
		this.offCommands = new Array(7);

		let noCommand = new NoCommand();
		for (let i = 0; i < 7; i++) {
			this.onCommands[i] = noCommand;
			this.offCommands[i] = noCommand;
		}
	}

	setCommand(slot: number, onCommand: Command, offCommand: Command): void {
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommand;
	}

	onButtonWasPushed(slot: number): void {
		this.onCommands[slot].execute();
	}

	offButtonWasPushed(slot: number): void {
		this.offCommands[slot].execute();
	}

	getClass(obj) {
		if (typeof obj === 'undefined') return 'undefined';
		if (obj === null) return 'null';
		return obj.constructor.name;
	}

	toString(): string {
		console.log('\n------ Remote Control -------');
		for (let i = 0; i < this.onCommands.length; i++) {
			console.log('[slot ' + i + '] ' + this.getClass(this.onCommands[i]) + '    ' + this.getClass(this.offCommands[i]));
		}
		return '\n';
	}
}
