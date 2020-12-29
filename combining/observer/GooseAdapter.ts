import {Observer} from './Observer';
import {Quackable} from './Quackable';
import {Goose} from './Goose';
import {Observable} from './Observable';

export class GooseAdapter implements Quackable {
	private goose: Goose;
	private observable: Observable;

	constructor(goose: Goose) {
		this.goose = goose;
		this.observable = new Observable(this);
	}

	quack(): void {
		this.goose.honk();
		this.notifyObservers();
	}
	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer);
	}
	notifyObservers(): void {
		this.observable.notifyObservers();
	}
	toString(): string {
		return 'Goose pretending to be a Duck';
	}
}
