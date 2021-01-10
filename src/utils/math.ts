const round = (value: number) => {
  return Math.round(value)
}

const average = (values: number[]) => {
  const sum = values.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)

  return sum / values.length
}

export {
  round,
  average
}