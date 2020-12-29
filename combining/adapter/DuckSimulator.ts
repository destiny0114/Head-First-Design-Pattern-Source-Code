import {DuckCall} from './DuckCall';
import {Goose} from './Goose';
import {GooseAdapter} from './GooseAdapter';
import {MallardDuck} from './MallardDuck';
import {Quackable} from './Quackable';
import {RedheadDuck} from './RedheadDuck';
import {RubberDuck} from './RubberDuck';

export class DuckSimulator {
	private mallardDuck: Quackable;
	private redheadDuck: Quackable;
	private duckCall: Quackable;
	private rubberDuck: Quackable;
	private gooseDuck: Quackable;

	constructor() {
		this.mallardDuck = new MallardDuck();
		this.redheadDuck = new RedheadDuck();
		this.duckCall = new DuckCall();
		this.rubberDuck = new RubberDuck();
		this.gooseDuck = new GooseAdapter(new Goose());
	}

	simulate(): void {
		this.simulateCall(this.mallardDuck);
		this.simulateCall(this.redheadDuck);
		this.simulateCall(this.duckCall);
		this.simulateCall(this.rubberDuck);
		this.simulateCall(this.gooseDuck);
	}

	simulateCall(duck: Quackable): void {
		duck.quack();
	}
}
