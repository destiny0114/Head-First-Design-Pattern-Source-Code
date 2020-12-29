import {Menu} from './Menu';
import {MenuComponent} from './MenuComponent';

export class Waitress {
	private allMenus: MenuComponent;

	constructor(allMenus: MenuComponent) {
		this.allMenus = allMenus;
	}

	printMenu(): void {
		this.allMenus.print();
	}

	printVegetarianMenu(): void {
		// its a dirty code
		// if found solution let me know
		const iterator = this.allMenus.createIterator();
		console.log('VEGETARIAN MENU\n----');

		while (iterator.hasNext()) {
			let menuComponent = iterator.next();
			let i = 0;
			if (menuComponent) {
				while (i < menuComponent.getSize()) {
					try {
						if (menuComponent.getChild(i).isVegetarian()) {
							menuComponent.getChild(i).print();
						}
					} catch (e) {}
					i++;
				}
			}
		}
	}
}
