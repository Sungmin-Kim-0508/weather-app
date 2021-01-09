import React from 'react'
import styled from 'styled-components'

const Divider: React.FC = () => {
  return <ThematicBreak />;
}

const ThematicBreak = styled.hr`
  border: none;
  height: 3px;
  color: black;
  background-color: black;
`

export default Divider