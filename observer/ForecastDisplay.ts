import {Observer} from './Observer';
import {DisplayElement} from './DisplayElement';
import {WeatherData} from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
	private currentPressure: number = 27;
	private lastPressure: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
	}

	update(temp: number, humidity: number, pressure: number): void {
		this.lastPressure = this.currentPressure;
		this.currentPressure = pressure;
		this.display();
	}
	display(): void {
		console.log('Forecast: ');
		if (this.currentPressure > this.lastPressure) {
			console.log('Improving weather on the way!');
		} else if (this.currentPressure === this.lastPressure) {
			console.log('More of the same');
		} else if (this.currentPressure < this.lastPressure) {
			console.log('Watch out for cooler, rainy weather');
		}
	}
}
