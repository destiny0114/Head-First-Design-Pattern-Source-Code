import {Menu} from './Menu';
import {MenuItem} from './MenuItem';
import {Iterator} from './Iterator';
import {CafeMenuIterator} from './CafeMenuIterator';

export class CafeMenu implements Menu<MenuItem> {
	private static MAX_ITEMS: number = 6;
	private numberOfItems: number = 0;
	private menuItems: MenuItem[] = [];

	constructor() {
		this.addItem('Veggie Burger and Air Fries', 'Veggie burger on a whole wheat bun, lettuce, tomato, and fries', true, 3.99);
		this.addItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69);
		this.addItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29);
	}

	addItem(name: string, description: string, vegetarian: boolean, price: number) {
		const menuItem = new MenuItem(name, description, vegetarian, price);
		if (this.numberOfItems >= CafeMenu.MAX_ITEMS) {
			throw new Error("Sorry, menu is full! Can't add item to menu");
		} else {
			this.menuItems[this.numberOfItems] = menuItem;
			this.numberOfItems = this.numberOfItems + 1;
		}
	}

	createIterator(): Iterator<MenuItem> {
		// look like ts not powerful as java can use hashtable return a iterator
		// if have solution let me know
		return new CafeMenuIterator(this.menuItems);
	}
}
