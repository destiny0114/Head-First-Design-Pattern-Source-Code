import {PizzaStore} from './PizzaStore';
import {ChicagoStyleCheesePizza} from './ChicagoStyleCheesePizza';
import {ChicagoStyleClamPizza} from './ChicagoStyleClamPizza';
import {ChicagoStylePepperoniPizza} from './ChicagoStylePepperoniPizza';
import {ChicagoStyleVeggiePizza} from './ChicagoStyleVeggiePizza';

export class ChicagoPizzaStore extends PizzaStore {
	createPizza(type: string) {
		if (type === 'cheese') {
			return new ChicagoStyleCheesePizza();
		} else if (type === 'veggie') {
			return new ChicagoStyleVeggiePizza();
		} else if (type === 'clam') {
			return new ChicagoStyleClamPizza();
		} else if (type === 'pepperoni') {
			return new ChicagoStylePepperoniPizza();
		} else return null;
	}
}
