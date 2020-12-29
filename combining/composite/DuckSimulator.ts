import {AbstractDuckFactory} from './AbstractDuckFactory';
import {Flock} from './Flock';
import {Goose} from './Goose';
import {GooseAdapter} from './GooseAdapter';
import {Quackable} from './Quackable';
import {QuackCounter} from './QuackCounter';

export class DuckSimulator {
	private flockOfDucks: Flock = new Flock();
	private flockOfMallards: Flock = new Flock();

	private redheadDuck: Quackable;
	private duckCall: Quackable;
	private rubberDuck: Quackable;
	private gooseDuck: Quackable;

	constructor(duckFactory: AbstractDuckFactory) {
		this.redheadDuck = duckFactory.createRedheadDuck();
		this.duckCall = duckFactory.createDuckCall();
		this.rubberDuck = duckFactory.createRubberDuck();
		this.gooseDuck = new GooseAdapter(new Goose());

		this.flockOfDucks.add(this.redheadDuck);
		this.flockOfDucks.add(this.duckCall);
		this.flockOfDucks.add(this.rubberDuck);
		this.flockOfDucks.add(this.gooseDuck);

		this.flockOfMallards.add(duckFactory.createMallardDuck());
		this.flockOfMallards.add(duckFactory.createMallardDuck());
		this.flockOfMallards.add(duckFactory.createMallardDuck());
		this.flockOfMallards.add(duckFactory.createMallardDuck());

		this.flockOfDucks.add(this.flockOfMallards.getQuackers());
	}

	simulate(): void {
		console.log('Duck Simulator: Whole Flock Simulation');
		this.simulateCall(this.flockOfDucks);

		console.log('Duck Simulator: Mallard Flock Simulation');
		this.simulateCall(this.flockOfMallards);

		console.log('The ducks quacked ' + QuackCounter.getQuacks() + ' times');
	}

	simulateCall(duck: Quackable): void {
		duck.quack();
	}
}
