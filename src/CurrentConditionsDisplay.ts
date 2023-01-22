import WeatherData from './WeatherData';
import { WeatherDataObserver } from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  constructor (private weatherData:WeatherData) {
    weatherData.registerObserver(this);
  }

  private _temperature = 0;

  private _humidity = 0;

  notify(temperature:number, humidity:number, pressure:number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this.displayCurrentConditions();
  }

  displayCurrentConditions(): void {
    // eslint-disable-next-line
    // console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
    console.log('Current conditions: %fF degrees and %f% humidity', this._temperature, this._humidity);
  }

}