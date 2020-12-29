import {BlackOlives} from './BlackOlives';
import {Cheese} from './Cheese';
import {Clam} from './Clam';
import {Dough} from './Dough';
import {Eggplant} from './Eggplant';
import {FrozenClam} from './FrozenClam';
import {MozzarellaCheese} from './MozzarellaCheese';
import {Pepperoni} from './Pepperoni';
import {PizzaIngredientFactory} from './PizzaIngredientFactory';
import {PlumTomatoSauce} from './PlumTomatoSauce';
import {Sauce} from './Sauce';
import {SlicedPepperoni} from './SlicedPepperoni';
import {Spinach} from './Spinach';
import {ThickCrustDough} from './ThickCrustDough';
import {Veggie} from './Veggie';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThickCrustDough();
	}

	createSauce(): Sauce {
		return new PlumTomatoSauce();
	}

	createCheese(): Cheese {
		return new MozzarellaCheese();
	}

	createVeggies(): Veggie[] {
		let veggies = [new BlackOlives(), new Spinach(), new Eggplant()];
		return veggies;
	}

	createPepperoni(): Pepperoni {
		return new SlicedPepperoni();
	}

	createClam(): Clam {
		return new FrozenClam();
	}
}
