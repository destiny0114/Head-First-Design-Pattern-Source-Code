import {Quackable} from './Quackable';
import {Goose} from './Goose';

export class GooseAdapter implements Quackable {
	private goose: Goose;

	constructor(goose: Goose) {
		this.goose = goose;
	}

	quack(): void {
		this.goose.honk();
	}
}
