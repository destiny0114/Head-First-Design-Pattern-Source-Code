import {Pizza} from './Pizza';

export class NYStyleVeggiePizza extends Pizza {
	constructor() {
		super();
		this.name = 'New York Style Veggie Pizza';
		this.dough = 'Thin Crust Dough';
		this.sauce = 'Marinara Sauce';

		this.toppings.push('Grated Reggiano Cheese');
		this.toppings.push('Garlic');
		this.toppings.push('Onion');
		this.toppings.push('Mushrooms');
		this.toppings.push('Red Pepper');
	}

	cut() {
		console.log('Cutting the pizza into square slices');
	}
}
