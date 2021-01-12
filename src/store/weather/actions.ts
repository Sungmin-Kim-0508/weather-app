import { Dispatch } from "redux";
import { WeatherActionTypes, FETCH_ERROR, ADD_WEATHER, CLEAR_WEATHER, DELETE_WEATHER, UPDATE_WEATHER, GET_WEAHTER_DETAIL, UPDATE_FORECAST, Weather, FiveDaysForecasts } from './types'
import { WeatherService } from '../../services'
import { toastifyNotification } from "../../utils/toastify";
import { RootState } from "..";

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

const findWeatherById = (getState: () => RootState, id: string) => {
  const { weathers } = getState().weather
  return weathers.find(item => item.id === id)
}

export const readWeatherDetail = (id : string) => async (dispatch: Dispatch<WeatherActionTypes>, getState: () => RootState) => {
  const weather = findWeatherById(getState, id)

  const data = await WeatherService.getWeatherDetails({ cityId: weather?.cityId });
  dispatch({
    type: GET_WEAHTER_DETAIL,
    payload: data as Weather
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

export const updateWeather = (id: string) => async (dispatch: Dispatch<WeatherActionTypes>, getState: () => RootState) => {
  try {
    const weather = findWeatherById(getState, id)
    
    const data = await WeatherService.findWeatherBy({ cityId: weather?.cityId })
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

export const updateForecast = () => async (dispatch: Dispatch<WeatherActionTypes>, getState: () => RootState) => {
  try {
    const { weather } = getState().weather
    const forecasts = await WeatherService.getWeatherDetails({ cityId: weather?.cityId }, true)
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

export const deleteWeather = (id: string) => (dispatch: Dispatch<WeatherActionTypes>) => {
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