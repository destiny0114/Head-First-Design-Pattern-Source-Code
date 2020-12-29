import {CaffeineBeverageWithHook} from './CaffeinBeverageWithHook';

export class TeaWithHook extends CaffeineBeverageWithHook {
	brew(): void {
		console.log('Steeping the tea');
	}

	addCondiments(): void {
		console.log('Adding Lemon');
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

		console.log('Would you like lemon with your tea (y/n)? ');

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
