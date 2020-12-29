import {Observer} from './Observer';
import {DisplayElement} from './DisplayElement';
import {WeatherData} from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
	private temperature: number;
	private humidity: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
	}
	update(temp: number, humidity: number, pressure: number): void {
		this.temperature = temp;
		this.humidity = humidity;
		this.display();
	}

	display(): void {
		console.log('Current conditions: ' + this.temperature + 'F degrees and ' + this.humidity + '% humidity');
	}
}
