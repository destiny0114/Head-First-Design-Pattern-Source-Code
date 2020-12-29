import {Beverage, Size} from './Beverage';
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
		let cost = this.beverage.cost();
		if (this.beverage.getSize() == Size.TALL) {
			cost += 0.1;
		} else if (this.beverage.getSize() == Size.GRANDE) {
			cost += 0.15;
		} else if (this.beverage.getSize() == Size.VENTI) {
			cost += 0.2;
		}
		return cost;
	}
}
