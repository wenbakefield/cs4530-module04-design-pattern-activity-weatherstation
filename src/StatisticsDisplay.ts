import WeatherData from './WeatherData';
import { WeatherDataObserver } from './WeatherDataObserver';

export default class StatisticsDisplay implements WeatherDataObserver {
  constructor (private weatherData:WeatherData) {
    weatherData.registerObserver(this);
  }

  private _maxTemp = 0;

  private _minTemp = 0;

  private _tempSum = 0;

  private _numReadings = 0;

  private _currentTemp = 0;

  notify(temperature:number, humidity:number, pressure:number): void {
    this._currentTemp = temperature;
    this.displayStatistics()
  }

  displayStatistics(): void {
    // this._tempSum += currentData.temperature;
    this._tempSum += this._currentTemp;
    this._numReadings += 1;

    //if (this._maxTemp < currentData.temperature) {
    //  this._maxTemp = currentData.temperature;
    //}

    if (this._maxTemp < this._currentTemp) {
      this._maxTemp = this._currentTemp;
    }

    //if (this._minTemp > currentData.temperature) {
    //  this._minTemp = currentData.temperature;
    //}

    if (this._minTemp > this._currentTemp) {
      this._minTemp = this._currentTemp;
    }

    // eslint-disable-next-line
    console.log('Avg/max/min temperature = %f/%i/%i', this._tempSum / this._numReadings, this._maxTemp, this._minTemp);
  }

}