export enum Size {
	TALL = 'TALL',
	GRANDE = 'GRANDE',
	VENTI = 'VENTI',
}

export abstract class Beverage {
	protected description: string = 'Unknown Beverage';
	protected size: Size = Size.TALL;

	getDescription(): string {
		return this.description;
	}

	setSize(size: Size) {
		this.size = size;
	}

	getSize(): Size {
		return this.size;
	}

	abstract cost(): number;
}
