import {MenuComponent} from './MenuComponent';

export class Menu extends MenuComponent {
	private menuComponents: MenuComponent[] = [];
	private name: string;
	private description: string;

	constructor(name: string, description: string) {
		super();
		this.name = name;
		this.description = description;
	}

	add(menuComponent: MenuComponent): void {
		this.menuComponents.push(menuComponent);
	}

	remove(menuComponent: MenuComponent): void {
		this.menuComponents.filter((item) => item !== menuComponent);
	}

	getChild(i: number) {
		return this.menuComponents[i];
	}

	getName(): string {
		return this.name;
	}

	getDescription(): string {
		return this.description;
	}

	print(): void {
		console.log(this.getName() + ', ' + this.getDescription());
		console.log('---------------------');
		for (let component of this.menuComponents) {
			component.print();
		}
	}
}
