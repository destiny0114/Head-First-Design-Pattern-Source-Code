import {Pizza} from './Pizza';
import {CheesePizza} from './CheesePizza';
import {ClamPizza} from './ClamPizza';
import {PepperoniPizza} from './PepperoniPizza';
import {VeggiePizza} from './VeggiePizza';

export class SimplePizzaFactory {
	constructor() {}

	createPizza(type: string): Pizza {
		let pizza = null;

		if (type === 'cheese') {
			pizza = new CheesePizza();
		} else if (type === 'pepperoni') {
			pizza = new PepperoniPizza();
		} else if (type === 'clam') {
			pizza = new ClamPizza();
		} else if (type === 'veggie') {
			pizza = new VeggiePizza();
		}
		return pizza;
	}
}
