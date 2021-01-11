import React from 'react'
import { PanelBox, SearchFields, LocationList, Button, Divider } from '../components/index'
import { useCrudWeather } from '../hooks/useCrudWeather'



const LeftPanel: React.FC = () => {
  const { inputValue, state, onAddCity, onUpdateWeather, onDeleteWeather, onShowDetail, onClearList } = useCrudWeather()
  const { weathers } = state
  
  return (
    <PanelBox paddingX="10px" paddingY="10px">
      <SearchFields placeholder="Type city name" {...inputValue} onAddCity={onAddCity} />
      <Divider />
      <LocationList weatherAndLocations={weathers} onShowDetail={onShowDetail} onUpdateWeather={onUpdateWeather} onDeleteWeather={onDeleteWeather} />
      <Button.BtnSubmit onClick={onClearList}>Clear</Button.BtnSubmit>
    </PanelBox>
  );
}

export default LeftPanel