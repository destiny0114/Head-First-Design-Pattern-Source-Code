import {GumballMachine} from './GumballMachine';
import {State} from './State';

export class HasQuarterState implements State {
	private gumballMachine: GumballMachine;

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}
	insertQuarter(): void {
		console.log("You can't insert another quarter");
	}
	ejectQuarter(): void {
		console.log('Quarter returned');
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
	turnCrank(): void {
		console.log('You turned...');
		let winner = Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
		if (winner == 0 && this.gumballMachine.getCount() > 1) {
			this.gumballMachine.setState(this.gumballMachine.getWinnerState());
		} else {
			this.gumballMachine.setState(this.gumballMachine.getSoldState());
		}
	}
	dispense(): void {
		console.log('No gumball dispensed');
	}
	refill(): void {
		throw new Error('Method not implemented.');
	}
	toString(): string {
		return 'waiting for turn of crank';
	}
}
