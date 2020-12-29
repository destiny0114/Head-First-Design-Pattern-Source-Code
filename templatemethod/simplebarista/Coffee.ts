export class Coffee {
	prepareRecipe(): void {
		this.boilWater();
		this.brewCoffeeGrinds();
		this.pourInCup();
		this.addSugarAndMilk();
	}

	boilWater(): void {
		console.log('Boiling water');
	}

	brewCoffeeGrinds(): void {
		console.log('Dripping Coffee through filter');
	}

	pourInCup(): void {
		console.log('Pouring into cup');
	}

	addSugarAndMilk(): void {
		console.log('Adding Sugar and Milk');
	}
}
