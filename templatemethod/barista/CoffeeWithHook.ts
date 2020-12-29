import {CaffeineBeverageWithHook} from './CaffeinBeverageWithHook';

export class CoffeeWithHook extends CaffeineBeverageWithHook {
	brew(): void {
		console.log('Dripping Coffee through filter');
	}

	addCondiments(): void {
		console.log('Adding Sugar and Milk');
	}

	customerWantsCondiments(input: string): boolean {
		let answer = this.getUserInput(input);
		if (answer.toLowerCase().startsWith('y')) {
			return true;
		} else {
			return false;
		}
	}

	getUserInput(input: string): string {
		let answer: string = '';

		console.log('Would you like milk and sugar with your coffee (y/n)? ');

		try {
			answer = input;
		} catch (err) {
			throw new Error('IO error trying to read your answer');
		}
		if (answer === '') {
			return 'no';
		}
		return answer;
	}
}
