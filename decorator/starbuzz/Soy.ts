import {Beverage} from './Beverage';
import {CondimentDecorator} from './CondimentDecorator';

export class Soy extends CondimentDecorator {
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Soy';
	}

	cost(): number {
		return 0.15 + this.beverage.cost();
	}
}
