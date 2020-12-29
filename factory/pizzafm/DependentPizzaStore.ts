import {ChicagoStyleCheesePizza} from './ChicagoStyleCheesePizza';
import {ChicagoStyleClamPizza} from './ChicagoStyleClamPizza';
import {ChicagoStylePepperoniPizza} from './ChicagoStylePepperoniPizza';
import {ChicagoStyleVeggiePizza} from './ChicagoStyleVeggiePizza';
import {NYStyleCheesePizza} from './NYStyleCheesePizza';
import {NYStyleClamPizza} from './NYStyleClamPizza';
import {NYStylePepperoniPizza} from './NYStylePepperoniPizza';
import {NYStyleVeggiePizza} from './NYStyleVeggiePizza';
import {Pizza} from './Pizza';
// NOT RECOMMENDED
export class DependentPizzaStore {
	constructor() {}

	createPizza(style: string, type: string): Pizza {
		let pizza = null;
		if (style === 'NY') {
			if (type === 'cheese') {
				pizza = new NYStyleCheesePizza();
			} else if (type === 'veggie') {
				pizza = new NYStyleVeggiePizza();
			} else if (type === 'clam') {
				pizza = new NYStyleClamPizza();
			} else if (type === 'pepperoni') {
				pizza = new NYStylePepperoniPizza();
			}
		} else if (style === 'Chicago') {
			if (type === 'cheese') {
				pizza = new ChicagoStyleCheesePizza();
			} else if (type === 'veggie') {
				pizza = new ChicagoStyleVeggiePizza();
			} else if (type === 'clam') {
				pizza = new ChicagoStyleClamPizza();
			} else if (type === 'pepperoni') {
				pizza = new ChicagoStylePepperoniPizza();
			}
		} else {
			console.log('Error: invalid type of pizza');
			return null;
		}
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}
}
