export abstract class Beverage {
	protected description: string = 'Unknown Beverage';

	getDescription(): string {
		return this.description;
	}

	abstract cost(): number;
}
