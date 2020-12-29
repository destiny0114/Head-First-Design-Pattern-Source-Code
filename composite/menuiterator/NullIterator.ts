import {MenuComponent} from './MenuComponent';
import {Iterator} from './Iterator';

export class NullIterator implements Iterator<MenuComponent> {
	next(): MenuComponent | undefined | null {
		return null;
	}

	hasNext(): boolean {
		return false;
	}

	remove(): void {
		throw new Error('Method not implemented.');
	}
}
