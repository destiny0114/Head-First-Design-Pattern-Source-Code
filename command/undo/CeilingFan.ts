export class CeilingFan {
	private location: string = '';
	private level: number;
	public static HIGH: number = 3;
	public static MEDIUM: number = 2;
	public static LOW: number = 1;
	public static OFF: number = 0;

	constructor(location: string) {
		this.location = location;
	}

	high(): void {
		// turns the ceiling fan on to high
		this.level = CeilingFan.HIGH;
		console.log(this.location + ' ceiling fan is on high');
	}

	medium(): void {
		// turns the ceiling fan on to medium
		this.level = CeilingFan.MEDIUM;
		console.log(this.location + ' ceiling fan is on medium');
	}

	low(): void {
		// turns the ceiling fan on to low
		this.level = CeilingFan.MEDIUM;
		console.log(this.location + ' ceiling fan is on low');
	}

	off(): void {
		// turns the ceiling fan off
		this.level = CeilingFan.OFF;
		console.log(this.location + ' ceiling fan is off');
	}

	getSpeed(): number {
		return this.level;
	}
}
