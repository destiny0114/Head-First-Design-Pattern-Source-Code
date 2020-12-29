import {AbstractDuckFactory} from './AbstractDuckFactory';
import {DuckCall} from './DuckCall';
import {MallardDuck} from './MallardDuck';
import {Quackable} from './Quackable';
import {RedheadDuck} from './RedheadDuck';
import {RubberDuck} from './RubberDuck';

export class DuckFactory extends AbstractDuckFactory {
	createMallardDuck(): Quackable {
		return new MallardDuck();
	}
	createRedheadDuck(): Quackable {
		return new RedheadDuck();
	}
	createDuckCall(): Quackable {
		return new DuckCall();
	}
	createRubberDuck(): Quackable {
		return new RubberDuck();
	}
}
