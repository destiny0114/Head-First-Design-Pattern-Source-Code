import {DuckCall} from './DuckCall';
import {MallardDuck} from './MallardDuck';
import {Quackable} from './Quackable';
import {RedheadDuck} from './RedheadDuck';
import {RubberDuck} from './RubberDuck';

export class DuckSimulator {
	private mallardDuck: Quackable;
	private redheadDuck: Quackable;
	private duckCall: Quackable;
	private rubberDuck: Quackable;

	constructor() {
		this.mallardDuck = new MallardDuck();
		this.redheadDuck = new RedheadDuck();
		this.duckCall = new DuckCall();
		this.rubberDuck = new RubberDuck();
	}

	simulate(): void {
		this.simulateCall(this.mallardDuck);
		this.simulateCall(this.redheadDuck);
		this.simulateCall(this.duckCall);
		this.simulateCall(this.rubberDuck);
	}

	simulateCall(duck: Quackable): void {
		duck.quack();
	}
}
