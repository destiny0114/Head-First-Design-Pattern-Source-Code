import {PizzaStore} from './PizzaStore';
import {NYStyleCheesePizza} from './NYStyleCheesePizza';
import {NYStyleClamPizza} from './NYStyleClamPizza';
import {NYStylePepperoniPizza} from './NYStylePepperoniPizza';
import {NYStyleVeggiePizza} from './NYStyleVeggiePizza';

export class NYPizzaStore extends PizzaStore {
	createPizza(type: string) {
		if (type === 'cheese') {
			return new NYStyleCheesePizza();
		} else if (type === 'veggie') {
			return new NYStyleVeggiePizza();
		} else if (type === 'clam') {
			return new NYStyleClamPizza();
		} else if (type === 'pepperoni') {
			return new NYStylePepperoniPizza();
		} else return null;
	}
}
