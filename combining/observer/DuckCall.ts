import {Quackable} from './Quackable';
import {Observer} from './Observer';
import {Observable} from './Observable';

export class DuckCall implements Quackable {
	private observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}

	quack(): void {
		console.log('Kwak');
		this.notifyObservers();
	}
	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer);
	}
	notifyObservers(): void {
		this.observable.notifyObservers();
	}
	toString() {
		return 'Duck Call';
	}
}
