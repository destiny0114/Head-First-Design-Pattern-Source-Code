import {Pizza} from './Pizza';

export class VeggiePizza extends Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[];

	constructor() {
		super();
		this.name = 'Veggie Pizza';
		this.dough = 'Crust';
		this.sauce = 'Marinara Sauce';

		this.toppings.push('Shredded Mozzarella');
		this.toppings.push('Diced Onion');
		this.toppings.push('Grated Parmesan');
		this.toppings.push('Sliced Mushrooms');
		this.toppings.push('Sliced Black Pepper');
		this.toppings.push('Sliced Black Olives');
	}
}
