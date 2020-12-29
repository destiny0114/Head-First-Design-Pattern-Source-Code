import {DinerMenu} from './DinerMenu';
import {Iterator} from './Iterator';
import {MenuItem} from './MenuItem';
import {PancakeHouseMenu} from './PancakeHouseMenu';

export class Waitress {
	private pancakeHouseMenu: PancakeHouseMenu;
	private dinerMenu: DinerMenu;

	constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
		this.pancakeHouseMenu = pancakeHouseMenu;
		this.dinerMenu = dinerMenu;
	}

	printMenu(): void {
		const pancakeIterator = this.pancakeHouseMenu.createIterator();
		const dinerIterator = this.dinerMenu.createIterator();
		console.log('MENU\n----\nBREAKFAST');
		this.printItems(pancakeIterator);
		console.log('LUNCH');
		this.printItems(dinerIterator);
	}

	printItems(iterator: Iterator<MenuItem>) {
		while (iterator.hasNext()) {
			let menuItem = iterator.next();
			console.log(menuItem.getName() + ', ' + menuItem.getPrice() + ' -- ' + menuItem.getDescription());
		}
	}
}
