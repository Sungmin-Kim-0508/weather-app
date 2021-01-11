import axios from 'axios'
import { average, round } from '../utils/math'
import { FiveDaysForecasts, Weather } from '../store/weather/types';
import { changeFirstLetterToUpperCase } from '../utils/stringMethods';

interface WeatherParams {
  cityName?: string,
  cityId?: number
}

const WEAHTER_BY_CITY_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c51223c219d6aec8cb8c5210449bd859&units=metric';

const FIVE_DAYS_FORECAST_BASE_URL = 'http://api.openweathermap.org/data/2.5/onecall?appid=c51223c219d6aec8cb8c5210449bd859&units=metric&exclude=current,minutely,hourly,alerts&lat=44.6453&lon=-63.5724'

export const WeatherService = {
  findWeatherBy: async ({ cityName, cityId } : WeatherParams): Promise<Weather> => {
    let params: object = {}
    if (cityName && !cityId) { params = { q: cityName } }
    else { params = { id: cityId } }

    const { data: weather } = await axios.get(WEAHTER_BY_CITY_BASE_URL, { params })
    const { temp, pressure } = weather.main
    const { lat, lon } = weather.coord
    const { speed, deg } = weather.wind
    const { main, description, icon } = weather.weather[0]

    return { id: weather.id, cityName: weather.name, temp: round(temp), pressure, lat, lon, windSpeed: round(speed), windDeg: deg, main, description: changeFirstLetterToUpperCase(description), icon, fiveDaysForecasts: [] }
  },
  findFiveDaysForecast: async (lat: number, lon: number): Promise<FiveDaysForecasts[]> => {
    const { data: weather } = await axios.get(FIVE_DAYS_FORECAST_BASE_URL, {
      params: { lat, lon }
    })
    return weather.daily.map((item : any) => {
      const { min, max } = item.temp
      return {
        dt: item.dt,
        temp: round(average([min, max])),
        icon: item.weather[0].icon
      }
    }).slice(0, 5)
  },
  getWeatherDetails: async ({ cityName, cityId } : WeatherParams, onlyForcasts: boolean = false): Promise<Weather|FiveDaysForecasts[]> => {
    const weather = await WeatherService.findWeatherBy({ cityName, cityId });
    const fiveDaysForecasts = await WeatherService.findFiveDaysForecast(weather.lat, weather.lon)

    if (onlyForcasts) {
      return fiveDaysForecasts
    }
    
    return {
      ...weather,
      fiveDaysForecasts
    }
  }
}