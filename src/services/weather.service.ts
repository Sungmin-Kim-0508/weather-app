import axios from 'axios'
import { round } from '../utils/math'
import { Weather } from '../store/weather/types';
import { changeFirstLetterToUpperCase } from '../utils/stringMethods';

const WEAHTER_BY_CITY_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c51223c219d6aec8cb8c5210449bd859&units=metric';

const FIVE_DAYS_FORECAST_BASE_URL = 'http://api.openweathermap.org/data/2.5/onecall?appid=c51223c219d6aec8cb8c5210449bd859&units=metric&exclude=current,minutely,hourly,alerts&lat=44.6453&lon=-63.5724'

export const WeatherService = {
  findWeatherBy: async ({ cityName, cityId } : { cityName?: string, cityId?: number }): Promise<Weather> => {
    let params: object = {}
    if (cityName && !cityId) { params = { q: cityName } }
    else { params = { id: cityId } }

    const { data } = await axios.get(WEAHTER_BY_CITY_BASE_URL, { params })
    const { temp, pressure } = data.main
    const { lat, lon } = data.coord
    const { speed, deg } = data.wind
    const { main, description, icon } = data.weather[0]

    return { id: data.id, cityName: data.name, temp: round(temp), pressure, lat, lon, windSpeed: speed, windDeg: deg, main, description: changeFirstLetterToUpperCase(description), icon, fiveDaysForecasts: [] }
  },
  fiveDaysForecast: async (lat: number, lon: string) => {
    const response = await axios.get(FIVE_DAYS_FORECAST_BASE_URL, {
      params: {
        lat, lon
      }
    })
    console.log(response)
  }
}