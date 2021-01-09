// Type Checking State
export interface Weather {
  id: number;
  cityName: string;
  main: string;
  description: string;
  icon: string;
  lat: number;
  lon: number;
  temp: number;
  pressure: number;
  windSpeed: number;
  windDeg: number;
  fiveDaysForecasts: [];
}

export interface ErrorWeather {
  statusCode: number;
  message: string;
}

export interface WeatherState {
  weathers: Weather[];
  error: ErrorWeather;
}

// Type Checking Actions
export const FETCH_WEATHER_BY_CITY = 'FETCH_WEATHER_BY_CITY'
export const FETCH_ERROR = 'FETCH_ERROR'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const DELETE_WEATHER = 'DELETE_WEATHER'
export const CLEAR_WEATHER = 'CLEAR_WEATHER'

// Type Checking Action Creators
export interface FetchWeatherInfoAction {
  type: typeof FETCH_WEATHER_BY_CITY;
  payload: Weather;
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: ErrorWeather
}

export interface UpdateWeatherAction {
  type: typeof UPDATE_WEATHER;
  payload: Weather;
}

export interface DeleteWeatherAction {
  type: typeof DELETE_WEATHER;
  payload: number;
}

export interface ClearWeatherAction {
  type: typeof CLEAR_WEATHER;
}


export type WeatherActionTypes =
  FetchWeatherInfoAction | UpdateWeatherAction | DeleteWeatherAction | ClearWeatherAction | FetchErrorAction