import {MenuItem} from './MenuItem';
import {Iterator} from './Iterator';
import {PancakeHouseMenuIterator} from './PancakeHouseMenuIterator';
import {Menu} from './Menu';

export class PancakeHouseMenu implements Menu<MenuItem> {
	private menuItems: MenuItem[] = [];

	constructor() {
		this.addItem("K&B's Pancake Breakfast", 'Pancakes with scrambled eggs, and toast', true, 2.99);

		this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99);

		this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49);

		this.addItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59);
	}

	addItem(name: string, description: string, vegetarian: boolean, price: number): void {
		const menuItem = new MenuItem(name, description, vegetarian, price);
		this.menuItems.push(menuItem);
	}

	// This method is not going to be used after we have the createIterator() method
	getMenuItems(): MenuItem[] {
		return this.menuItems;
	}

	createIterator(): Iterator<MenuItem> {
		return new PancakeHouseMenuIterator(this.menuItems);
	}
}
