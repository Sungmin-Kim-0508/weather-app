// API Docs: https://openweathermap.org/weather-conditions#How-to-get-icon-URL
// const iconURL = 'http://openweathermap.org/img/wn/10d@2x.png'
const ICON_URL = 'http://openweathermap.org/img/wn/'

export const getWeatherIconUrl = (iconId: string, iconSize: 'small' | 'large'): string => {
  let imageUrl = ICON_URL
  
  const icons : any = {
    "01d": "01d",
    "02d": "02d",
    "03d": "03d",
    "04d": "04d",
    "09d": "09d",
    "10d": "10d",
    "11d": "11d",
    "13d": "13d",
    "50d": "50d",
    "01n": "01n",
    "02n": "02n",
    "03n": "03n",
    "04n": "04n",
    "09n": "09n",
    "10n": "10n",
    "11n": "11n",
    "13n": "13n",
    "50n": "50n",
  }

  imageUrl += `${icons[iconId]}@`

  if (iconSize === 'small') {
    imageUrl += '2x.png'
  } else if (iconSize === 'large') {
    imageUrl += '4x.png'
  }
  return imageUrl
}