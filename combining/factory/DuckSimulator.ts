import {AbstractDuckFactory} from './AbstractDuckFactory';
import {Goose} from './Goose';
import {GooseAdapter} from './GooseAdapter';
import {Quackable} from './Quackable';
import {QuackCounter} from './QuackCounter';

export class DuckSimulator {
	private mallardDuck: Quackable;
	private redheadDuck: Quackable;
	private duckCall: Quackable;
	private rubberDuck: Quackable;
	private gooseDuck: Quackable;

	constructor(duckFactory: AbstractDuckFactory) {
		this.mallardDuck = duckFactory.createMallardDuck();
		this.redheadDuck = duckFactory.createRedheadDuck();
		this.duckCall = duckFactory.createDuckCall();
		this.rubberDuck = duckFactory.createRubberDuck();
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
