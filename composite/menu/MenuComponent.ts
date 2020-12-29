export abstract class MenuComponent {
	add(menuComponent: MenuComponent): void {
		throw new Error();
	}

	remove(menuComponent: MenuComponent): void {
		throw new Error();
	}

	getChild(i: number): void {
		throw new Error();
	}

	getName(): string {
		throw new Error();
	}

	getDescription(): string {
		throw new Error();
	}

	getPrice(): number {
		throw new Error();
	}

	isVegetarian(): boolean {
		throw new Error();
	}

	print(): void {
		throw new Error();
	}
}
