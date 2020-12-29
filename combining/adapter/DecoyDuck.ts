import {Quackable} from './Quackable';

export class DecoyDuck implements Quackable {
	quack(): void {
		console.log('<< Silence >>');
	}
}
