import {MenuComponent} from './MenuComponent';
import {Iterator} from './Iterator';
import {CompositeIterator} from './CompositeIterator';

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
		this.menuComponents = this.menuComponents.filter((item) => {
			return item.constructor.name !== menuComponent.constructor.name;
		});
	}

	getChild(i: number): MenuComponent {
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

	getSize(): number {
		return this.menuComponents.length;
	}

	createIterator(): Iterator<MenuComponent> {
		return new CompositeIterator(this.menuComponents);
	}
}
