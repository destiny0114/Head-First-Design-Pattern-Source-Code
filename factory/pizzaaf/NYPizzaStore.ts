import {PizzaStore} from './PizzaStore';
import {Pizza} from './Pizza';
import {NYPizzaIngredientFactory} from './NYPizzaIngredientFactory';
import {VeggiePizza} from './VeggiePizza';
import {CheesePizza} from './CheesePizza';
import {ClamPizza} from './ClamPizza';
import {PepperoniPizza} from './PepperoniPizza';

export class NYPizzaStore extends PizzaStore {
	createPizza(type: string): Pizza {
		let pizza = null;
		let ingredientFactory = new NYPizzaIngredientFactory();
		if (type === 'cheese') {
			pizza = new CheesePizza(ingredientFactory);
			pizza.setName('New York Style Cheese Pizza');
		} else if (type === 'veggie') {
			pizza = new VeggiePizza(ingredientFactory);
			pizza.setName('New York Style Veggie Pizza');
		} else if (type === 'clam') {
			pizza = new ClamPizza(ingredientFactory);
			pizza.setName('New York Style Clam Pizza');
		} else if (type === 'pepperoni') {
			pizza = new PepperoniPizza(ingredientFactory);
			pizza.setName('New York Style Pepperoni Pizza');
		}
		return pizza;
	}
}
