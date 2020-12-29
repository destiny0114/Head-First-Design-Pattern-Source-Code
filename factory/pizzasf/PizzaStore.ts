import {Pizza} from './Pizza';
import {SimplePizzaFactory} from './SimplePizzaFactory';

export class PizzaStore {
	private factory: SimplePizzaFactory;

	constructor(factory: SimplePizzaFactory) {
		this.factory = factory;
	}

	orderPizza(type: string): Pizza {
		let pizza = this.factory.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}
}
