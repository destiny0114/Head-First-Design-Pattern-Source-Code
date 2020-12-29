import {DuckCall} from './DuckCall';
import {Goose} from './Goose';
import {GooseAdapter} from './GooseAdapter';
import {MallardDuck} from './MallardDuck';
import {Quackable} from './Quackable';
import {QuackCounter} from './QuackCounter';
import {RedheadDuck} from './RedheadDuck';
import {RubberDuck} from './RubberDuck';

export class DuckSimulator {
	private mallardDuck: Quackable;
	private redheadDuck: Quackable;
	private duckCall: Quackable;
	private rubberDuck: Quackable;
	private gooseDuck: Quackable;

	constructor() {
		this.mallardDuck = new QuackCounter(new MallardDuck());
		this.redheadDuck = new QuackCounter(new RedheadDuck());
		this.duckCall = new QuackCounter(new DuckCall());
		this.rubberDuck = new QuackCounter(new RubberDuck());
		this.gooseDuck = new GooseAdapter(new Goose());
	}

	simulate(): void {
		this.simulateCall(this.mallardDuck);
		this.simulateCall(this.redheadDuck);
		this.simulateCall(this.duckCall);
		this.simulateCall(this.rubberDuck);
		this.simulateCall(this.gooseDuck);
		console.log('The ducks quacked ' + QuackCounter.getQuacks() + ' times');
	}

	simulateCall(duck: Quackable): void {
		duck.quack();
	}
}
