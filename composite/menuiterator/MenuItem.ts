import {MenuComponent} from './MenuComponent';
import {Iterator} from './Iterator';
import {NullIterator} from './NullIterator';

export class MenuItem extends MenuComponent {
	private name: string;
	private description: string;
	private vegetarian: boolean;
	private price: number;

	constructor(name: string, description: string, vegetarian: boolean, price: number) {
		super();
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

	print(): void {
		let isVeggie = this.isVegetarian() ? '(v)' : '';
		console.log('  ' + this.getName() + isVeggie + ', ' + this.getPrice() + '     -- ' + this.getDescription());
	}

	createIterator(): Iterator<MenuComponent> {
		return new NullIterator();
	}
}
