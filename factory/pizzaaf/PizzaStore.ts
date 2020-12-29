import {Pizza} from './Pizza';

export abstract class PizzaStore {
	orderPizza(type: string): Pizza {
		let pizza = this.createPizza(type);
		console.log('--- Making a ' + pizza.getName() + ' ---');
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}

	protected abstract createPizza(type: string);
}
