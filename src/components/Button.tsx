import React, { CSSProperties } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  style?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BtnIcon: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return <StyleBtnIcon style={style} onClick={onClick}>{children}</StyleBtnIcon>;
}

const BtnSubmit: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledBtnSubmit onClick={onClick}>{children}</StyledBtnSubmit>
}

const StyleBtnIcon = styled.button`
  background: transparent;
  border: none;
  flex: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

const StyledBtnSubmit = styled.button`
  border: transparent;
  background-color: #dfe4ea;
  text-align: center;
  font-weight: 600;

  width: 7rem;
  height: 1.8rem;

  float: right;
`

export {
  BtnIcon,
  BtnSubmit
}