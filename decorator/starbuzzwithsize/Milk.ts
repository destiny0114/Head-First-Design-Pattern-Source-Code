import {Beverage} from './Beverage';
import {CondimentDecorator} from './CondimentDecorator';

export class Milk extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Milk';
	}

	cost(): number {
		return 0.1 + this.beverage.cost();
	}
}
