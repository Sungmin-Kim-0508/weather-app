import React from 'react'
import uniqid from 'uniqid'
import styled from 'styled-components'
import IconFrame from './IconFrame'
import { IconRefresh } from '../icons'
import { Weather } from '../store/weather/types'
import { Button } from '.'
import { getWeatherIconUrl } from '../icons/weatherIcons'
import { convertUnixToTime } from '../utils/time'

type WeatherDetailProps = {
  weather: Weather | null;
  onUpdateForecast?: (id: number) => void;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ weather, onUpdateForecast }) => {
  if (weather === null) {
    return (
      <HeaderWrapper>
        <span>No results</span>
      </HeaderWrapper>
    )
  }

  return (
    <>
      <HeaderWrapper>
        <span>{weather.cityName}</span>
        <Button.BtnIcon onClick={() => onUpdateForecast!(weather.id)}>
          <IconRefresh />
        </Button.BtnIcon>
      </HeaderWrapper>
      <DetailWrapper>
        <IconBox>
          <IconFrame src={getWeatherIconUrl(weather.icon, "large")} size="100px" />
        </IconBox>
        <InfoBox>
          <span>{weather.temp}C</span>
          <span>{weather.description}</span>
          <span>Wind: {weather.windSpeed}ms {weather.windDeg} deg</span>
          <span>Pressure {weather.pressure}</span>
        </InfoBox>
      </DetailWrapper>
      <ForecastBox>
        {weather.fiveDaysForecasts.map(forecast => (
          <ForecastDetail key={uniqid()}>
            {convertUnixToTime(forecast.dt, "DD ddd").split(' ').map(word => (
              <span key={uniqid()}>{word}</span>
            ))}
            <IconFrame src={getWeatherIconUrl(forecast.icon, "small")} size="50px" isCenter={true} />
            <span>{forecast.temp}C</span>
          </ForecastDetail>
        ))}
      </ForecastBox>
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.5rem;
  font-weight: 600;
`

const DetailWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`

const IconBox = styled.div`
  flex: 1;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`

const ForecastBox = styled.div`
  display: flex;
`

const ForecastDetail = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 7vw;
`

export default WeatherDetail