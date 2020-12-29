import {Observable} from './Observable';
import {Observer} from './Observer';
import {Quackable} from './Quackable';

export class MallardDuck implements Quackable {
	private observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}

	quack(): void {
		console.log('Quack');
		this.notifyObservers();
	}
	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer);
	}
	notifyObservers(): void {
		this.observable.notifyObservers();
	}

	toString(): string {
		return 'Mallard Duck';
	}
}
