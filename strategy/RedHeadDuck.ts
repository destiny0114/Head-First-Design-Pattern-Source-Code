import {Duck} from './Duck';
import {FlyWithWings} from './FlyWithWings';
import {Quack} from './Quack';

export class MallardDuck extends Duck {
	constructor() {
		super();
		this.flyBehavior = new FlyWithWings();
		this.quackBehavior = new Quack();
	}

	display() {
		console.log("I'm a real Red Head duck");
	}
}
