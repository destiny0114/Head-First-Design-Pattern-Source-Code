import {Subject} from './Subject';
import {Observer} from './Observer';

export class WeatherData implements Subject {
	private observers: Observer[];
	private temperature: number;
	private humidity: number;
	private pressure: number;

	constructor() {
		this.observers = [];
	}
	registerObserver(o: Observer): void {
		this.observers.push(o);
	}
	removeObserver(o: Observer): void {
		let index = this.observers.indexOf(o);

		if (index > -1) {
			this.observers.splice(index, 1);
		}
	}
	notifyObservers(): void {
		for (let observer of this.observers) {
			observer.update(this.temperature, this.humidity, this.pressure);
		}
	}

	measurementsChanged() {
		this.notifyObservers();
	}

	setMeasurements(temperature: number, humidity: number, pressure: number) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.measurementsChanged();
	}

	getTemperature(): number {
		return this.temperature;
	}

	getHumidity(): number {
		return this.humidity;
	}

	getPressure(): number {
		return this.pressure;
	}
}
