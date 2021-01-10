import React from 'react'
import { useSelector } from 'react-redux'
import { PanelBox, WeatherDetail } from '../components/index'
import { RootState } from '../store'

const RightPanel: React.FC = () => {
  const { weather } = useSelector((state: RootState) => state.weather)
  return (
    <PanelBox paddingX="2rem" paddingY="1rem">
      <WeatherDetail weather={weather!} />
    </PanelBox>
  );
}

export default RightPanel