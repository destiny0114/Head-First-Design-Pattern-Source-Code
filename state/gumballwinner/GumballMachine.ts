import {State} from './State';
import {HasQuarterState} from './HasQuarterState';
import {NoQuarterState} from './NoQuarterState';
import {SoldOutState} from './SoldOutState';
import {SoldState} from './SoldState';
import {WinnerState} from './WinnerState';

export class GumballMachine {
	private soldOutState: State;
	private noQuarterState: State;
	private hasQuarterState: State;
	private soldState: State;
	private winnerState: State;

	private state: State;
	private count: number = 0;

	constructor(numberGumballs: number) {
		this.soldOutState = new SoldOutState(this);
		this.noQuarterState = new NoQuarterState(this);
		this.hasQuarterState = new HasQuarterState(this);
		this.soldState = new SoldState(this);
		this.winnerState = new WinnerState(this);

		this.count = numberGumballs;
		if (numberGumballs > 0) {
			this.state = this.noQuarterState;
		} else {
			this.state = this.soldOutState;
		}
	}

	insertQuarter(): void {
		this.state.insertQuarter();
	}

	ejectQuarter(): void {
		this.state.ejectQuarter();
	}

	turnCrank(): void {
		this.state.turnCrank();
		this.state.dispense();
	}

	releaseBall(): void {
		console.log('A gumball comes rolling out the slot...');
		if (this.count > 0) {
			this.count = this.count - 1;
		}
	}

	getCount(): number {
		return this.count;
	}

	refill(count: number): void {
		this.count += count;
		console.log('The gumball machine was just refilled; its new count is: ' + this.count);
		this.state.refill();
	}

	setState(state: State): void {
		this.state = state;
	}

	getState(): State {
		return this.state;
	}

	getSoldOutState(): State {
		return this.soldOutState;
	}

	getNoQuarterState(): State {
		return this.noQuarterState;
	}

	getHasQuarterState(): State {
		return this.hasQuarterState;
	}

	getSoldState(): State {
		return this.soldState;
	}

	getWinnerState(): State {
		return this.winnerState;
	}

	toString(): string {
		console.log('Mighty Gumball, Inc.');
		console.log('Java-enabled Standing Gumball Model #2004');
		console.log('Inventory: ' + this.count + ' gumball');

		console.log('\n');
		return 'Machine is ' + this.state + '\n';
	}
}
