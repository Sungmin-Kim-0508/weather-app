import produce from 'immer'
import { WeatherActionTypes, WeatherState, ADD_WEATHER, FETCH_ERROR, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER, GET_WEAHTER_DETAIL, UPDATE_FORECAST, Weather } from "./types";

const defaultErrorState = { statusCode: 0, message: '' }

const initialState: WeatherState = {
  weather: null,
  weathers: [],
  error: defaultErrorState
}

export default function reducer(state = initialState, action: WeatherActionTypes): WeatherState {
  switch (action.type) {
    case GET_WEAHTER_DETAIL:
      return {
        ...state,
        weather: action.payload
      }
    case ADD_WEATHER:
      const newWeathers = [action.payload, ...state.weathers].slice(0, 8)
      return {
        ...state,
        weathers: newWeathers,
        error: defaultErrorState
      }
    case UPDATE_WEATHER:
      const updatedWeathers = produce(state.weathers, draft => {
        const index = draft.findIndex(weather => weather.id === action.payload.id)
        draft[index] = action.payload
      })
      return {
        ...state,
        weathers: updatedWeathers,
        error: defaultErrorState
      }
    case UPDATE_FORECAST:
      const updatedForecast = produce(state.weather, (draft: Weather) => {
        draft.fiveDaysForecasts = action.payload
      })
      return {
        ...state,
        weather: updatedForecast
      }
    case DELETE_WEATHER:
      return {
        weather: null,
        weathers: state.weathers.filter(weather => weather.id !== action.payload),
        error: { ...state.error }
      }
    case CLEAR_WEATHER:
      return {
        ...state,
        weathers: [],
        error: defaultErrorState
      }
    case FETCH_ERROR:
      const { statusCode, message } = action.payload
      return {
        ...state,
        weathers: [...state.weathers],
        error: { statusCode, message }
      }
    default:
      return state
  }
}