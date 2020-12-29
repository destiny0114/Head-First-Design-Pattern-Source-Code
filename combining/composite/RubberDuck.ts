import {Quackable} from './Quackable';

export class RubberDuck implements Quackable {
	quack(): void {
		console.log('Squeak');
	}
}
