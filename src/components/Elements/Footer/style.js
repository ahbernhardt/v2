import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 45%;
  ${media.md`
    position: static;
    padding-top: 1.5rem;
  `}
  
  span {
    font-family: ${fonts.mono};
    font-size:1.2rem;
  } 
`

export const Item = styled.div`
  position: absolute;
  font-family: ${fonts.mono};
  color: ${colors.gray700};
  font-size: .9rem;
  line-height: 1em;
  ${props => props.position === 'left'
    ? css`
      transform: rotate(-90deg) translateX(-50%);
      transform-origin: left;
      ${getOuterSpace('left')}
    `
    : css`
      transform: rotate(90deg) translateX(50%);
      transform-origin: right;
      ${getOuterSpace('right')}
    ` }
  
  ${media.mon27`
      font-size: 1.3rem;
      line-height: 1em;
  `}
  
  ${media.mon24`
      font-size: .9rem;
      line-height: 1em;
  `}
  
  ${media.mac13`
      font-size: .7rem;
      line-height: 1em;
  `}
  
  ${media.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`
