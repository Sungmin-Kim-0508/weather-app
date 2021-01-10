import React from 'react'
import { useSelector } from 'react-redux'
import { PanelBox, WeatherDetail } from '../components/index'
import { RootState } from '../store'

const RightPanel: React.FC = () => {
  const { weathers } = useSelector((state: RootState) => state.weather)

  const fivedaysforecasts = [
    {
      day: 10,
      dayOfWeek: "Mon",
      weatherStatus: 'Haze',
      temp: 15
    },
    {
      day: 10,
      dayOfWeek: "Tue",
      weatherStatus: 'Rainy',
      temp: 15
    },
    {
      day: 10,
      dayOfWeek: "Wed",
      weatherStatus: 'Sunny',
      temp: 15
    },
    {
      day: 10,
      dayOfWeek: "Thu",
      weatherStatus: 'Haze',
      temp: 15
    },
    {
      day: 10,
      dayOfWeek: "Fri",
      weatherStatus: 'Haze',
      temp: 15
    },
  ]
  return (
    <PanelBox paddingX="2rem" paddingY="1rem">
      <WeatherDetail fivedaysforecasts={fivedaysforecasts} />
    </PanelBox>
  );
}

export default RightPanel