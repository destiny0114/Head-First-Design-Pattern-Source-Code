import {Iterator} from './Iterator';
import {MenuItem} from './MenuItem';
import {Menu} from './Menu';

export class Waitress {
	private pancakeHouseMenu: Menu<MenuItem>;
	private dinerMenu: Menu<MenuItem>;
	private cafeMenu: Menu<MenuItem>;

	constructor(pancakeHouseMenu: Menu<MenuItem>, dinerMenu: Menu<MenuItem>, cafeMenu: Menu<MenuItem>) {
		this.pancakeHouseMenu = pancakeHouseMenu;
		this.dinerMenu = dinerMenu;
		this.cafeMenu = cafeMenu;
	}

	printMenu(): void {
		const pancakeIterator = this.pancakeHouseMenu.createIterator();
		const dinerIterator = this.dinerMenu.createIterator();
		const cafeIterator = this.cafeMenu.createIterator();
		console.log('MENU\n----\nBREAKFAST');
		this.printMenuItems(pancakeIterator);
		console.log('LUNCH');
		this.printMenuItems(dinerIterator);
		console.log('DINNER');
		this.printMenuItems(cafeIterator);
	}

	printMenuItems(iterator: Iterator<MenuItem>) {
		while (iterator.hasNext()) {
			let menuItem = iterator.next();
			let isVegetarian = menuItem.isVegetarian() ? '(v)' : '';
			console.log(menuItem.getName() + ', ' + isVegetarian + ' ' + menuItem.getPrice() + ' -- ' + menuItem.getDescription());
		}
	}

	printVegetarianMenu(): void {
		console.log('VEGETARIAN MENU\n---------------');
		this.printVegetarianItems(this.pancakeHouseMenu.createIterator());
		this.printVegetarianItems(this.dinerMenu.createIterator());
		this.printVegetarianItems(this.cafeMenu.createIterator());
	}

	printVegetarianItems(iterator: Iterator<MenuItem>) {
		while (iterator.hasNext()) {
			let menuItem = iterator.next();
			if (menuItem.isVegetarian()) {
				console.log(menuItem.getName() + ', ' + '(v)' + ' ' + menuItem.getPrice() + ' -- ' + menuItem.getDescription());
			}
		}
	}
}
