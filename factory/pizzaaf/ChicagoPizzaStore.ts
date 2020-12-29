import {PizzaStore} from './PizzaStore';
import {Pizza} from './Pizza';
import {ChicagoPizzaIngredientFactory} from './ChicagoPizzaIngredientFactory';
import {VeggiePizza} from './VeggiePizza';
import {CheesePizza} from './CheesePizza';
import {ClamPizza} from './ClamPizza';
import {PepperoniPizza} from './PepperoniPizza';

export class ChicagoPizzaStore extends PizzaStore {
	createPizza(type: string): Pizza {
		let pizza = null;
		let ingredientFactory = new ChicagoPizzaIngredientFactory();
		if (type === 'cheese') {
			pizza = new CheesePizza(ingredientFactory);
			pizza.setName('Chicago Style Cheese Pizza');
		} else if (type === 'veggie') {
			pizza = new VeggiePizza(ingredientFactory);
			pizza.setName('Chicago Style Veggie Pizza');
		} else if (type === 'clam') {
			pizza = new ClamPizza(ingredientFactory);
			pizza.setName('Chicago Style Clam Pizza');
		} else if (type === 'pepperoni') {
			pizza = new PepperoniPizza(ingredientFactory);
			pizza.setName('Chicago Style Pepperoni Pizza');
		}
		return pizza;
	}
}
