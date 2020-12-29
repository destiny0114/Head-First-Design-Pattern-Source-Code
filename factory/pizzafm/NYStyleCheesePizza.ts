import {Pizza} from './Pizza';

export class NYStyleCheesePizza extends Pizza {
	constructor() {
		super();
		this.name = 'New York Style Sauce and Cheese Pizza';
		this.dough = 'Thin Crust Dough';
		this.sauce = 'Marinara Sauce';

		this.toppings.push('Grated Reggiano Cheese');
	}

	cut() {
		console.log('Cutting the pizza into square slices');
	}
}
