export abstract class Pizza {
	protected name: string;
	protected dough: string;
	protected sauce: string;
	protected toppings: string[] = [];

	getName(): string {
		return this.name;
	}

	prepare(): void {
		console.log('Prepare ' + this.name);
		console.log('Tossing dough...');
		console.log('Adding sauce...');
		console.log('Adding toppings: ');
		for (let topping of this.toppings) {
			console.log('   ' + topping);
		}
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
		console.log(this.dough);
		console.log(this.sauce);
		for (let topping of this.toppings) {
			console.log(topping);
		}
		return this.name;
	}
}
