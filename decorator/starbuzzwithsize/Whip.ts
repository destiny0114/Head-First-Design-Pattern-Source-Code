import {Beverage} from './Beverage';
import {CondimentDecorator} from './CondimentDecorator';

export class Whip extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Whip';
	}

	cost(): number {
		return 0.1 + this.beverage.cost();
	}
}
