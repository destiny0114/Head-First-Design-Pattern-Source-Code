import {Duck} from './Duck';
import {FlyNoWay} from './FlyNoWay';
import {Quack} from './Quack';

export class ModelDuck extends Duck {
	constructor() {
		super();
		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new Quack();
	}

	display() {
		console.log("I'm a real Model duck");
	}
}
