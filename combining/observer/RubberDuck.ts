import {Observer} from './Observer';
import {Observable} from './Observable';
import {Quackable} from './Quackable';

export class RubberDuck implements Quackable {
	private observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}

	quack(): void {
		console.log('Squeak');
		this.notifyObservers();
	}
	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer);
	}
	notifyObservers(): void {
		this.observable.notifyObservers();
	}

	toString() {
		return 'Rubber Duck';
	}
}
