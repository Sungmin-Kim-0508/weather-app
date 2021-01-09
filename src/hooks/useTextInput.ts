import { useState } from "react"

export const useTextInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setValue(value)
  }
  return { value, onChange }
}