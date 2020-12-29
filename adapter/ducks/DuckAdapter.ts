import {Duck} from './Duck';
import {Turkey} from './Turkey';

export class DuckAdapter implements Turkey {
	private duck: Duck;

	constructor(duck: Duck) {
		this.duck = duck;
	}

	gobble(): void {
		this.duck.quack();
	}

	fly(): void {
		for (let i = 0; i < 5; i++) {
			this.duck.fly();
		}
	}
}
