import {GumballMachine} from './GumballMachine';
import {State} from './State';

export class NoQuarterState implements State {
	private gumballMachine: GumballMachine;

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}

	insertQuarter(): void {
		console.log('You inserted a quarter');
		this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
	}

	ejectQuarter(): void {
		console.log("You haven't inserted a quarter");
	}

	turnCrank(): void {
		console.log("You turned, but there's no quarter");
	}

	dispense(): void {
		console.log('You need to pay first');
	}

	refill(): void {
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
	toString(): string {
		return 'waiting for quarter';
	}
}
