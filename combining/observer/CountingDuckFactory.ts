import {AbstractDuckFactory} from './AbstractDuckFactory';
import {DuckCall} from './DuckCall';
import {MallardDuck} from './MallardDuck';
import {Quackable} from './Quackable';
import {RedheadDuck} from './RedheadDuck';
import {RubberDuck} from './RubberDuck';
import {QuackCounter} from './QuackCounter';

export class CountingDuckFactory extends AbstractDuckFactory {
	createMallardDuck(): Quackable {
		return new QuackCounter(new MallardDuck());
	}
	createRedheadDuck(): Quackable {
		return new QuackCounter(new RedheadDuck());
	}
	createDuckCall(): Quackable {
		return new QuackCounter(new DuckCall());
	}
	createRubberDuck(): Quackable {
		return new QuackCounter(new RubberDuck());
	}
}
