import {MenuItem} from './MenuItem';
import {Iterator} from './Iterator';
import {DinerMenuIterator} from './DinerMenuIterator';

export class DinerMenu {
	private static MAX_ITEMS: number = 6;
	private numberOfItems: number = 0;
	private menuItems: MenuItem[] = [];

	constructor() {
		this.menuItems = new Array<MenuItem>(DinerMenu.MAX_ITEMS);

		this.addItem('Vegetarian BLT', "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99);
		this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
		this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
		this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
		this.addItem('Steamed Veggies and Brown Rice', 'Steamed vegetables over brown rice', true, 3.99);
		this.addItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89);
	}

	addItem(name: string, description: string, vegetarian: boolean, price: number): void {
		const menuItem = new MenuItem(name, description, vegetarian, price);

		if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
			throw new Error("Sorry, menu is full! Can't add item to menu");
		} else {
			this.menuItems[this.numberOfItems] = menuItem;
			this.numberOfItems = this.numberOfItems + 1;
		}
	}

	// This method is not going to be used after we have the createIterator() method
	getMenuItems(): MenuItem[] {
		return this.menuItems;
	}

	createIterator(): Iterator<MenuItem> {
		return new DinerMenuIterator(this.menuItems);
	}
}
