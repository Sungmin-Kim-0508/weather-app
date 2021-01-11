// Type Checking State
export interface FiveDaysForecasts {
  dt: number,
  icon: string;
  temp: number;
}
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
  fiveDaysForecasts: FiveDaysForecasts[];
}

export interface ErrorWeather {
  statusCode: number;
  message: string;
}

export interface WeatherState {
  weather: Weather | null;
  weathers: Weather[];
  error: ErrorWeather;
}

// Type Checking Actions
export const GET_WEAHTER_DETAIL = 'GET_WEAHTER_DETAIL'
export const ADD_WEATHER = 'ADD_WEATHER'
export const FETCH_ERROR = 'FETCH_ERROR'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const UPDATE_FORECAST = 'UPDATE_FORECAST'
export const DELETE_WEATHER = 'DELETE_WEATHER'
export const CLEAR_WEATHER = 'CLEAR_WEATHER'

// Type Checking Action Creators
export interface GetWeatherDetailAction {
  type: typeof GET_WEAHTER_DETAIL;
  payload: Weather;
}
export interface AddWeatherAction {
  type: typeof ADD_WEATHER;
  payload: Weather;
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: ErrorWeather
}

export interface UpdateForecastAction {
  type: typeof UPDATE_FORECAST;
  payload: FiveDaysForecasts[]
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
GetWeatherDetailAction | AddWeatherAction | UpdateWeatherAction | UpdateForecastAction | DeleteWeatherAction | ClearWeatherAction | FetchErrorAction