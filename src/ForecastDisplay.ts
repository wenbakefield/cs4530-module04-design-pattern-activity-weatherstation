import WeatherData from './WeatherData';
import { WeatherDataObserver } from './WeatherDataObserver';

export default class ForecastDisplay implements WeatherDataObserver {
  constructor (private weatherData:WeatherData) {
    weatherData.registerObserver(this);
  }

  private _currentPressure = 0;

  private _lastPressure = 0;

  notify(temperature:number, humidity:number, pressure:number): void {
    this._lastPressure = this._currentPressure;
    this._currentPressure = pressure
    this.displayForecast()
  }

  displayForecast(): void {
    // this._lastPressure = this._currentPressure;
    // this._currentPressure = weatherData.pressure;
    let forecast;
    if (this._currentPressure > this._lastPressure)
      forecast = 'Improving weather on the way!';
    else if (this._currentPressure === this._lastPressure)
      forecast = 'More of the same';
    else
      forecast = 'Watch out for cooler, rainy weather';
    // eslint-disable-next-line
    console.log('Forecast: %s', forecast);
  }

}