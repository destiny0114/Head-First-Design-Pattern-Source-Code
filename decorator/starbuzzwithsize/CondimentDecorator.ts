import {Beverage, Size} from './Beverage';

export abstract class CondimentDecorator extends Beverage {
	protected beverage: Beverage;

	abstract getDescription(): string;

	getSize(): Size {
		return this.size;
	}
}
