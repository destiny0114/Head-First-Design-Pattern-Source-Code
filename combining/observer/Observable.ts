import {Observer} from './Observer';
import {QuackObservable} from './QuackObservable';

export class Observable implements QuackObservable {
	private observers: Observer[] = [];
	private duck: QuackObservable;

	constructor(duck: QuackObservable) {
		this.duck = duck;
	}

	registerObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	notifyObservers(): void {
		for (let observer of this.observers) {
			observer.update(this.duck);
		}
	}

	getObservers(): Observer[] {
		return this.observers;
	}
}
