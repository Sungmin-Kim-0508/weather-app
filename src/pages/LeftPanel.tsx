import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PanelBox, SearchFields, LocationList, Button, Divider } from '../components/index'
import { useTextInput } from '../hooks/useTextInput'
import { RootState } from '../store'
import { clearWeather, deleteWeather, fetchWeathersByCity, updateWeather } from '../store/weather/actions'


const LeftPanel: React.FC = () => {
  const { weathers } = useSelector((state: RootState) => state.weather)
  const dispatch = useDispatch()

  const value = useTextInput('')

  const onAddCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { value: cityName } = value
    dispatch(fetchWeathersByCity(cityName))
  }

  const onUpdateWeather = (id: number) => {
    dispatch(updateWeather(id))
  }

  const onDeleteWeather = (id: number) => {
    dispatch(deleteWeather(id))
  }

  const onClearList = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(clearWeather())
  }
  
  return (
    <PanelBox paddingX="10px" paddingY="10px">
      <SearchFields placeholder="Type city name" {...value} onAddCity={onAddCity} />
      <Divider />
      <LocationList weatherAndLocations={weathers} onUpdateWeather={onUpdateWeather} onDeleteWeather={onDeleteWeather} />
      <Button.BtnSubmit onClick={onClearList}>Clear</Button.BtnSubmit>
    </PanelBox>
  );
}

export default LeftPanel