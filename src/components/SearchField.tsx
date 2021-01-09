import React from 'react'
import styled from 'styled-components'
import { Button } from '.'
import { IconPlus } from '../icons'

type SearchFieldProps = {
  value: any;
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddCity: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ value, placeholder, onChange, onAddCity }) => {
  return (
    <Container onSubmit={onAddCity}>
      <Field type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <Button.BtnIcon>
        <IconPlus />
      </Button.BtnIcon>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: row;
`

const Field = styled.input`
  border: transparent;
  border-bottom: 1px solid rgba(156, 163, 175, 1);

  flex: auto;

  :focus {
    outline: 0;
  }
`

export default SearchField