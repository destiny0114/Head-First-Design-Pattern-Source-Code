import {Quackable} from './Quackable';

export class QuackCounter implements Quackable {
	private duck: Quackable;
	private static numberOfQuacks: number = 0;

	constructor(duck: Quackable) {
		this.duck = duck;
	}

	quack(): void {
		this.duck.quack();
		QuackCounter.numberOfQuacks++;
	}

	static getQuacks(): number {
		return QuackCounter.numberOfQuacks;
	}
}
