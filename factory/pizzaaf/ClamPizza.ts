import {Pizza} from './Pizza';
import {PizzaIngredientFactory} from './PizzaIngredientFactory';

export class ClamPizza extends Pizza {
	private ingredientFactory: PizzaIngredientFactory;

	constructor(ingredientFactory: PizzaIngredientFactory) {
		super();
		this.ingredientFactory = ingredientFactory;
	}

	prepare() {
		console.log('Preparing ' + this.name);
		this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
		this.clam = this.ingredientFactory.createClam();
	}
}
