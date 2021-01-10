import { Dispatch } from "redux";
import { WeatherActionTypes, FETCH_ERROR, ADD_WEATHER, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER, GET_WEAHTER_DETAIL } from './types'
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

export const readWeatherDetail = (id : number) => (dispatch: Dispatch<WeatherActionTypes>) => {
  dispatch({
    type: GET_WEAHTER_DETAIL,
    payload: id
  })
}

export const fetchWeathersBy = ({ cityName, cityId } : { cityName?: string, cityId?: number }) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  try {
    const data = await WeatherService.findWeatherBy({ cityName, cityId });
    const fiveDaysForecasts = await WeatherService.findFiveDaysForecast(data.lat, data.lon)
    dispatch({
      type: ADD_WEATHER,
      payload: {
        ...data,
        fiveDaysForecasts
      }
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