export interface WeatherDataObserver {

    notify(temperature:number, humidity:number, pressure:number):void

}