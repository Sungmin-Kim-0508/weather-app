import React from 'react'
import { PanelBox, WeatherDetail } from '../components/index'
import { useCrudWeather } from '../hooks/useCrudWeather'

const RightPanel: React.FC = () => {
  const { state, onUpdateForecast } = useCrudWeather()
  const { weather } = state

  return (
    <PanelBox paddingX="3rem" paddingY="10px">
      <WeatherDetail weather={weather} onUpdateForecast={onUpdateForecast} />
    </PanelBox>
  );
}

export default RightPanel