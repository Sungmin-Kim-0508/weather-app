import dayjs from 'dayjs'

export const convertUnixToTime = (unixTime: number, format: string): string => {
  return dayjs.unix(unixTime).format(format)
}