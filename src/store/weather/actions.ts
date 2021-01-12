import { Dispatch } from "redux";
import { WeatherActionTypes, FETCH_ERROR, ADD_WEATHER, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER, GET_WEAHTER_DETAIL, UPDATE_FORECAST, Weather, FiveDaysForecasts } from './types'
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

export const readWeatherDetail = (id : number) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  const weather = await WeatherService.getWeatherDetails({ cityId: id });
  dispatch({
    type: GET_WEAHTER_DETAIL,
    payload: weather as Weather
  })
}

export const fetchWeathersBy = ({ cityName, cityId } : { cityName?: string, cityId?: number }) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  try {
    const weather = await WeatherService.getWeatherDetails({ cityName, cityId });

    dispatch({
      type: ADD_WEATHER,
      payload: weather as Weather
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
    toastifyNotification.success(`Updated ${data.cityName}'s weather!`)
  } catch (error) {
    if (error === undefined) {
      throw error
    }
    dispatchFetchError(dispatch, error)
  }
}

export const updateForecast = (id: number) => async (dispatch: Dispatch<WeatherActionTypes>) => {
  try {
    const forecasts = await WeatherService.getWeatherDetails({ cityId: id }, true)
    dispatch({
      type: UPDATE_FORECAST,
      payload: forecasts as FiveDaysForecasts[]
    })
    toastifyNotification.success("Updated forecasts." )
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