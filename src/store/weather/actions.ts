import { Dispatch } from "redux";
import { WeatherActionTypes, FETCH_ERROR, FETCH_WEATHER_BY_CITY, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER } from './types'
import { WeatherService } from '../../services'
import { toastifyNotification } from "../../utils/toastify";

const dispatchFetchError = (dispatch: Dispatch<WeatherActionTypes>, error: any) => {
  const { status, data: { message } } = error.response
  dispatch({
    type: FETCH_ERROR,
    payload: {
      statusCode: status,
      message
    }
  })
  toastifyNotification.error("Failed to add. " + message)
}

export const fetchWeathersByCity = (cityName: string) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  try {
    const data = await WeatherService.findWeatherBy({ cityName });
    dispatch({
      type: FETCH_WEATHER_BY_CITY,
      payload: data
    })
  } catch (error) {
    if (error === undefined) {
      throw error
    }
    dispatchFetchError(dispatch, error)
  }
}

export const updateWeather = (id: number) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  try {
    const data = await WeatherService.findWeatherBy({ cityId: id })
    dispatch({
      type: UPDATE_WEATHER,
      payload: data
    })
  } catch (error) {
    if (error === undefined) {
      throw error
    }
    dispatchFetchError(dispatch, error)
  }
}

export const deleteWeather = (id: number) => (dispatch: Dispatch<WeatherActionTypes>) => {
  dispatch({
    type: DELETE_WEATHER,
    payload: id
  })
}

export const clearWeather = () => (dispatch: Dispatch<WeatherActionTypes>) => {
  dispatch({
    type: CLEAR_WEATHER
  })
  toastifyNotification.success("Completed to clear the list." )
}