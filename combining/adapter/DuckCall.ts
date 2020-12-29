import {Quackable} from './Quackable';

export class DuckCall implements Quackable {
	quack(): void {
		console.log('Kwak');
	}
}
