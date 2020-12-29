export class MenuItem {
	private name: string;
	private description: string;
	private vegetarian: boolean;
	private price: number;

	constructor(name: string, description: string, vegetarian: boolean, price: number) {
		this.name = name;
		this.description = description;
		this.vegetarian = vegetarian;
		this.price = price;
	}

	getName(): string {
		return this.name;
	}

	getDescription(): string {
		return this.description;
	}

	isVegetarian(): boolean {
		return this.vegetarian;
	}

	getPrice(): number {
		return this.price;
	}
}
