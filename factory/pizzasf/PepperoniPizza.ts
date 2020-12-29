import {Pizza} from './Pizza';

export class PepperoniPizza extends Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[];

	constructor() {
		super();
		this.name = 'Pepperoni Pizza';
		this.dough = 'Crust';
		this.sauce = 'Marinara Sauce';

		this.toppings.push('Sliced Pepperoni');
		this.toppings.push('Sliced Onion');
		this.toppings.push('Grated Parmesan Cheese');
	}
}
