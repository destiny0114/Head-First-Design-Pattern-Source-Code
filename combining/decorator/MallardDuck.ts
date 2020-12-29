import {Quackable} from './Quackable';

export class MallardDuck implements Quackable {
	quack(): void {
		console.log('Quack');
	}
}
