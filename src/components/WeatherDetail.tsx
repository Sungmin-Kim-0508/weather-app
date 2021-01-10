import React from 'react'
import uniqid from 'uniqid'
import styled from 'styled-components'
import { IconRefresh } from '../icons'
import { Weather } from '../store/weather/types'

type WeatherDetailProps = {
  weather: Weather | null
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ weather }) => {
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
        <IconRefresh />
      </HeaderWrapper>
      <DetailWrapper>
        <IconBox>
          {weather.icon}
        </IconBox>
        <InfoBox>
          <span>15C</span>
          <span>Clear Sky</span>
          <span>Wind: 3ms 160 deg</span>
          <span>Pressure 1024</span>
        </InfoBox>
      </DetailWrapper>
      <ForecastBox>
        {weather.fiveDaysForecasts.map(forecast => (
          <ForecastDetail key={uniqid()}>
            <span>{forecast.dt}</span>
            <span>{forecast.icon}</span>
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