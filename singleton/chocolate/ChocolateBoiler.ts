export class ChocolateBoiler {
	private empty: boolean;
	private boiled: boolean;
	private static instance: ChocolateBoiler;

	constructor() {
		this.empty = true;
		this.boiled = false;
	}

	public static getInstance(): ChocolateBoiler {
		if (!ChocolateBoiler.instance) {
			console.log('Creating unique instance of Chocolate Boiler');
			ChocolateBoiler.instance = new ChocolateBoiler();
		}
		console.log('Returning instance of Chocolate Boiler');
		return ChocolateBoiler.instance;
	}

	fill(): void {
		if (this.isEmpty()) {
			this.empty = false;
			this.boiled = false;
			// fill the boiler with a milk/chocolate mixture
		}
	}

	drain(): void {
		if (!this.isEmpty() && this.isBoiled()) {
			// drain the boiled milk and chocolate
			this.empty = true;
		}
	}

	boil(): void {
		if (!this.isEmpty() && !this.isBoiled()) {
			// bring the contents to a boil
			this.boiled = true;
		}
	}

	isEmpty(): boolean {
		return this.empty;
	}

	isBoiled(): boolean {
		return this.boiled;
	}
}
