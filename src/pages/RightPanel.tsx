import React from 'react'
import { PanelBox, WeatherDetail } from '../components/index'
import { useCrudWeather } from '../hooks/useCrudWeather'

const RightPanel: React.FC = () => {
  const { state, onUpdateForecast } = useCrudWeather()
  const { weather } = state

  return (
    <PanelBox paddingX="2rem" paddingY="1rem">
      <WeatherDetail weather={weather} onUpdateForecast={onUpdateForecast} />
    </PanelBox>
  );
}

export default RightPanel