import React from 'react'
import styled from 'styled-components'
import { IconRefresh } from '../icons'

type WeatherDetailProps = {
  fivedaysforecasts: { day: number, dayOfWeek: string, weatherStatus: string, temp: number }[]
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ fivedaysforecasts }) => {
  return (
    <>
      <HeaderWrapper>
        <span>Halifax</span>
        <IconRefresh />
      </HeaderWrapper>
      <DetailWrapper>
        <IconBox>
          Weather Icon
        </IconBox>
        <InfoBox>
          <span>15C</span>
          <span>Clear Sky</span>
          <span>Wind: 3ms 160 deg</span>
          <span>Pressure 1024</span>
        </InfoBox>
      </DetailWrapper>
      <ForecastBox>
        {fivedaysforecasts.map(forecast => (
          <ForecastDetail>
            <span>{forecast.day}</span>
            <span>{forecast.dayOfWeek}</span>
            <span>{forecast.weatherStatus}</span>
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