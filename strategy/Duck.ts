import {FlyBehavior} from './FlyBehavior';
import {QuackBehavior} from './QuackBehavior';

export abstract class Duck {
	protected flyBehavior: FlyBehavior;
	protected quackBehavior: QuackBehavior;

	constructor() {}

	abstract display(): void;

	performFly(): void {
		this.flyBehavior.fly();
	}

	performQuack(): void {
		this.quackBehavior.quack();
	}

	setFlyBehavior(fb: FlyBehavior): void {
		this.flyBehavior = fb;
	}

	setQuackBehavior(qb: QuackBehavior): void {
		this.quackBehavior = qb;
	}

	swim(): void {
		console.log('All ducks float, even decoys!');
	}
}
