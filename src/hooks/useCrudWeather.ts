import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { clearWeather, deleteWeather, fetchWeathersBy, readWeatherDetail, updateForecast, updateWeather } from '../store/weather/actions'
import { useTextInput } from './useTextInput'

export const useCrudWeather = () => {
  const state = useSelector((state: RootState) => state.weather)
  const dispatch = useDispatch()
  
  const inputValue = useTextInput('')

  const onAddCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { value: cityName } = inputValue
    dispatch(fetchWeathersBy({ cityName }))
  }

  const onUpdateWeather = (id: number) => {
    dispatch(updateWeather(id))
  }

  const onUpdateForecast = (id: number) => {
    dispatch(updateForecast(id))
  }

  const onDeleteWeather = (id: number) => {
    dispatch(deleteWeather(id))
  }

  const onShowDetail = (id: number) => {
    dispatch(readWeatherDetail(id))
  }

  const onClearList = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(clearWeather())
  }

  return {
    state,
    inputValue,
    onAddCity,
    onUpdateForecast,
    onUpdateWeather,
    onDeleteWeather,
    onShowDetail,
    onClearList
  }
}
