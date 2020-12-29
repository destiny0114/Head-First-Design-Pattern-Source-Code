import {Cheese} from './Cheese';
import {Clam} from './Clam';
import {Dough} from './Dough';
import {FreshClam} from './FreshClam';
import {Garlic} from './Garlic';
import {MarinaraSauce} from './MarinaraSauce';
import {Mushroom} from './Mushroom';
import {Onion} from './Onion';
import {Pepperoni} from './Pepperoni';
import {PizzaIngredientFactory} from './PizzaIngredientFactory';
import {RedPepper} from './RedPepper';
import {ReggianoCheese} from './ReggianoCheese';
import {Sauce} from './Sauce';
import {SlicedPepperoni} from './SlicedPepperoni';
import {ThinCrustDough} from './ThinCrustDough';
import {Veggie} from './Veggie';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThinCrustDough();
	}

	createSauce(): Sauce {
		return new MarinaraSauce();
	}

	createCheese(): Cheese {
		return new ReggianoCheese();
	}

	createVeggies(): Veggie[] {
		let veggies = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
		return veggies;
	}

	createPepperoni(): Pepperoni {
		return new SlicedPepperoni();
	}

	createClam(): Clam {
		return new FreshClam();
	}
}
