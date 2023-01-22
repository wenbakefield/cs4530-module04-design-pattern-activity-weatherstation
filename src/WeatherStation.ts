import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import WeatherData from './WeatherData';

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

const forecastDisplay = new ForecastDisplay(weatherData);

const heatIndexDisplay = new HeatIndexDisplay(weatherData);

const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
