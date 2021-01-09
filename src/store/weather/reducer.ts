import { WeatherActionTypes, WeatherState, FETCH_WEATHER_BY_CITY, FETCH_ERROR, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER } from "./types";

const defaultErrorState = { statusCode: 0, message: '' }

const initialState: WeatherState = {
  weathers: [],
  error: defaultErrorState
}

export default function reducer(state = initialState, action: WeatherActionTypes): WeatherState {
  switch (action.type) {
    case FETCH_WEATHER_BY_CITY:
      const newWeathers = [action.payload, ...state.weathers].slice(0, 8)
      return {
        weathers: newWeathers,
        error: defaultErrorState
      }
    case DELETE_WEATHER:
      return {
        weathers: state.weathers.filter(weather => weather.id !== action.payload),
        error: { ...state.error }
      }
    case CLEAR_WEATHER:
      return {
        weathers: [],
        error: defaultErrorState
      }
    case FETCH_ERROR:
      const { statusCode, message } = action.payload
      return {
        weathers: [...state.weathers],
        error: { statusCode, message }
      }
    default:
      return state
  }
}