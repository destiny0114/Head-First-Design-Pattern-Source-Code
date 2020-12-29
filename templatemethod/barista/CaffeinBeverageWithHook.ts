export abstract class CaffeineBeverageWithHook {
	prepareRecipe(input: string): void {
		this.boilWater();
		this.brew();
		this.pourInCup();
		if (this.customerWantsCondiments(input)) {
			this.addCondiments();
		}
	}

	abstract brew(): void;

	abstract addCondiments(): void;

	boilWater(): void {
		console.log('Boiling water');
	}

	pourInCup(): void {
		console.log('Pouring into cup');
	}
	// hook
	customerWantsCondiments(input: string): boolean {
		return true;
	}
	// u can just leave empty customerWantsCondiments() {} becoz
	// we gonna override method on sub class
}
