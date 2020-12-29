import {Quackable} from './Quackable';

export abstract class AbstractDuckFactory {
	abstract createMallardDuck(): Quackable;
	abstract createRedheadDuck(): Quackable;
	abstract createDuckCall(): Quackable;
	abstract createRubberDuck(): Quackable;
}
