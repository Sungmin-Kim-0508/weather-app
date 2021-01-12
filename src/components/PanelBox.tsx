import React from 'react'
import styled from 'styled-components'

type PanelBoxProps = {
  // give padding left and right
  paddingX: string;
  // give padding top and bottom
  paddingY: string;
}

const PanelBox: React.FC<PanelBoxProps> = ({ children, paddingY, paddingX }) => {
  return (
    <Box paddingY={paddingY} paddingX={paddingX}>
      {children}
    </Box>
  );
}

const Box = styled.div<PanelBoxProps>`
  padding: ${props => props.paddingY} ${props => props.paddingX};
  border: 2.5px solid;
  height: calc(100vh - 70px);
`

export default PanelBox