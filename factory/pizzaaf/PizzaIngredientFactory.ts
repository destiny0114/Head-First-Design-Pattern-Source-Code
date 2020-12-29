import {Cheese} from './Cheese';
import {Sauce} from './Sauce';
import {Dough} from './Dough';
import {Veggie} from './Veggie';
import {Pepperoni} from './Pepperoni';
import {Clam} from './Clam';

export interface PizzaIngredientFactory {
	createDough(): Dough;
	createSauce(): Sauce;
	createCheese(): Cheese;
	createVeggies(): Veggie[];
	createPepperoni(): Pepperoni;
	createClam(): Clam;
}
