export abstract class Pizza {
	abstract name: string;
	abstract dough: string;
	abstract sauce: string;
	abstract toppings: string[] = [];

	getName(): string {
		return this.name;
	}

	prepare(): void {
		console.log('Preparing ' + this.name);
	}

	bake(): void {
		console.log('Baking ' + this.name);
	}

	cut(): void {
		console.log('Cuting ' + this.name);
	}

	box(): void {
		console.log('Boxing ' + this.name);
	}

	toString(): void {
		console.log('---- ' + this.name + ' ----\n');
		console.log(this.dough + '\n');
		console.log(this.sauce + '\n');
		for (let topping of this.toppings) {
			console.log(topping + '\n');
		}
	}
}
