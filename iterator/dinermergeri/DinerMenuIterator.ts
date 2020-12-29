import {Iterator} from './Iterator';
import {MenuItem} from './MenuItem';

type Nullable<T> = T | null;

export class DinerMenuIterator implements Iterator<MenuItem> {
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

	remove(): void {
		if (this.position <= 0) {
			throw new Error("You can't remove an item until you've one at least one next()");
		}
		if (this.items[this.position - 1] != null) {
			while (this.items.length > 0) {
				this.items.shift();
			}
		}
	}
}
