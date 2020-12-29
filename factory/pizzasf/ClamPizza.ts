import {Pizza} from './Pizza';

export class ClamPizza extends Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[];

	constructor() {
		super();
		this.name = 'Clam Pizza';
		this.dough = 'Thin Crust';
		this.sauce = 'White Garlic Sauce';

		this.toppings.push('Clams');
		this.toppings.push('Grated Parmesan Cheese');
	}
}
