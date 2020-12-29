import {CurrentConditionsDisplay} from './CurrentConditionsDisplay';
import {ForecastDisplay} from './ForecastDisplay';
import {HeatIndexDisplay} from './HeatIndexDisplay';
import {StatisticsDisplay} from './StatisticsDisplay';
import {WeatherData} from './WeatherData';

const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);

weatherData.removeObserver(forecastDisplay);
weatherData.setMeasurements(62, 90, 28.1);
