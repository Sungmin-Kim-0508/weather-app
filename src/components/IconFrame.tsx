import React from 'react'
import styled, { css } from 'styled-components';

type IconFrameProps = {
  src: string;
  size: string
  isCenter?: boolean
}

const IconFrame: React.FC<IconFrameProps> = ({ src, ...props }) => {
  return <ImageFrame src={src} {...props} />;
}

const MoveCenter = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const ImageFrame = styled.img<IconFrameProps>`
  ${props => {
    return props.isCenter ? MoveCenter : null
  }}
  
  width: ${props => props.size};
  height: ${props => props.size};
`

export default IconFrame