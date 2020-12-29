import {Quackable} from './Quackable';

export class Flock implements Quackable {
	private quackers: Quackable[] = [];

	add(quacker: Quackable | Quackable[]): void {
		this.quackers = this.quackers.concat(quacker);
	}

	getQuackers(): Quackable[] {
		return this.quackers;
	}

	quack(): void {
		for (let quacker of this.quackers) {
			quacker.quack();
		}
	}
}
