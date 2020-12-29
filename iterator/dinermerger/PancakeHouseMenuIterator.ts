import {Iterator} from './Iterator';
import {MenuItem} from './MenuItem';

export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
	private items: MenuItem[];
	private position: number = 0;

	constructor(items: MenuItem[]) {
		this.items = items;
	}

	next(): MenuItem {
		const menuItem = this.items[this.position];
		this.position = this.position + 1;
		return menuItem;
	}

	hasNext(): boolean {
		if (this.position >= this.items.length || this.items[this.position] == null) {
			return false;
		} else {
			return true;
		}
	}
}
