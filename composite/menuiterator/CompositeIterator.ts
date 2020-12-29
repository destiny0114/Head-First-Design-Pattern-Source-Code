import {Menu} from '../menu/Menu';
import {Iterator} from './Iterator';
import {MenuComponent} from './MenuComponent';
import {Stack} from './Stack';

export class CompositeIterator implements Iterator<MenuComponent> {
	private items: MenuComponent[] = [];
	private position: number = 0;

	constructor(items: MenuComponent[]) {
		this.items = items;
	}

	next(): MenuComponent | undefined | null {
		if (this.hasNext()) {
			let component = this.items[this.position];
			for (let i = 0; i < component.getSize(); i++) {
				let menuItem = component.getChild(i);
				if (component.getChild(i).constructor.name === 'Menu') {
					this.items.push(menuItem);
					component.remove(menuItem);
				}
			}
			this.position = this.position + 1;
			return component;
		} else {
			return null;
		}
	}
	hasNext(): boolean {
		if (this.items.length === 0) {
			return false;
		} else {
			if (this.position >= this.items.length || this.items[this.position] == null) {
				this.items.pop();
				return this.hasNext();
			} else {
				return true;
			}
		}
	}
	remove(): void {
		throw new Error('Method not implemented.');
	}
}
