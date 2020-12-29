import {Cheese} from './Cheese';
import {Clam} from './Clam';
import {Dough} from './Dough';
import {Pepperoni} from './Pepperoni';
import {Sauce} from './Sauce';
import {Veggie} from './Veggie';

export abstract class Pizza {
	protected name: string;

	protected dough: Dough;
	protected sauce: Sauce;
	protected veggies: Veggie[] = [];
	protected pepperoni: Pepperoni;
	protected clam: Clam;
	protected cheese: Cheese;

	abstract prepare(): void;

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	bake(): void {
		console.log('Bake for 25 minutes at 350');
	}

	cut(): void {
		console.log('Cut the pizza into diagonal slices');
	}

	box(): void {
		console.log('Place pizza in official PizzaStore box');
	}

	toString(): string {
		console.log('---- ' + this.name + ' ----\n');
		if (this.dough != null) {
			console.log(this.dough.toString());
		}
		if (this.sauce != null) {
			console.log(this.sauce.toString());
		}
		if (this.cheese != null) {
			console.log(this.cheese.toString());
		}
		if (this.veggies != null) {
			let arr = this.veggies.join(', ');
			console.log(arr);
		}
		if (this.clam != null) {
			console.log(this.clam.toString());
		}
		if (this.pepperoni != null) {
			console.log(this.pepperoni.toString());
		}
		return this.name;
	}
}
