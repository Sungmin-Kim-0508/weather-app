import React from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'
import { Button } from '.'
import { IconRefresh, IconX } from '../icons'
import { getWeatherIconUrl } from '../icons/weatherIcons'
import { Weather } from '../store/weather/types'
import IconFrame from './IconFrame'

type LocationListProps = {
  weatherAndLocations?: Weather[];
  onShowDetail?: (id: string) => void;
  onUpdateWeather?: (id: string) => void
  onDeleteWeather?: (id: string) => void
}

const LocationList: React.FC<LocationListProps> = ({ weatherAndLocations = [], onShowDetail, onUpdateWeather, onDeleteWeather }) => {
  if (weatherAndLocations.length === 0 || weatherAndLocations === undefined) {
    return <div>No Location Added</div>
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <TitleWrapper>
        <Title>Recent locations</Title>
      </TitleWrapper>
      <div>
        {weatherAndLocations.map(item => (
          <ListItemLayout key={uniqid()}>
            <DescriptionWrapper onClick={() => onShowDetail!(item.id)}>
              <span>{item.cityName} - {item.temp}C</span>
              <IconFrame src={getWeatherIconUrl(item.icon, "small")} size="40px" />
            </DescriptionWrapper>
            <div>
              <Button.BtnIcon style={{ marginRight: "10px" }} onClick={() => onUpdateWeather!(item.id)}>
                <IconRefresh />
              </Button.BtnIcon>
              <Button.BtnIcon onClick={() => onDeleteWeather!(item.id)}>
                <IconX />
              </Button.BtnIcon>
            </div>
          </ListItemLayout>
        ))}
      </div>
    </div>
  );
}

const getGrayColor = (opacity: number) => {
  return `rgba(156, 163, 175, ${opacity})`
}

const TitleWrapper = styled.div`
  border: transparent;
  border-bottom: 2px solid ${getGrayColor(1)};
  color: ${getGrayColor(1)};

  padding: 3px 4px;
`

const Title = styled.span`
  font-size: 0.8rem;
`

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;

  padding: 10px 7px;
  border-bottom: 1px solid ${getGrayColor(0.5)};

  :hover {
    background-color: ${getGrayColor(0.5)};
  }
`

const DescriptionWrapper = styled.div`
  flex: auto;
  cursor: pointer;

  display: flex;
  align-items: center;
`

export default LocationList