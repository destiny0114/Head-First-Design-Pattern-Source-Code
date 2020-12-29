import {Observer} from './Observer';
import {Observable} from './Observable';
import {Quackable} from './Quackable';

export class DecoyDuck implements Quackable {
	private observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}
	quack(): void {
		console.log('<< Silence >>');
		this.notifyObservers();
	}
	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer);
	}
	notifyObservers(): void {
		this.observable.notifyObservers();
	}
	toString(): string {
		return 'Decoy Duck';
	}
}
