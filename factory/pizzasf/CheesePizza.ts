import {Pizza} from './Pizza';

export class CheesePizza extends Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[];

	constructor() {
		super();
		this.name = 'Cheese Pizza';
		this.dough = 'Regular Crust';
		this.sauce = 'Marinara Pizza Sauce';

		this.toppings.push('Fresh Mozzarella');
		this.toppings.push('Parmesan');
	}
}
