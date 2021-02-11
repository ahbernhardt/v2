import styled from "styled-components"
import { colors, media } from "../../../style/constants"

export const ContentWrapper = styled.main`
  display: block;
  width: 85vw;
  height: 100vh;
  counter-reset: counter;
  border: dotted 1px ${colors.yellow500};
  
  ${media.ultra`
    width: 100%;
    height: 100%;
    margin-top: 8rem;
    margin-bottom: 4rem;
    margin-right: 65px;
    padding-left: 118px;
    padding-right: 0.4rem;
  `}
  ${media.mon`
    width: 100%;
    height: 100%;
    margin-top: 8rem;
    margin-bottom: 4rem;
    margin-right: 60px;
    padding-left: 82px;
    padding-right: 0.2rem;
  `}
  
  ${media.mac`
    width: 100%;
    height: 100%;
    margin-top: 6rem;
    margin-bottom: 4rem;
    margin-right: 62px;
    padding-left: 90px;
    padding-right: 0.4rem;
  `}
  
  ${media.lg`
    width: 100%;
    height: auto;
    display: block;
  `}
  ${media.md`
    width: 100%;
  `}
  
  ${media.sm`
    width: 90vw;
    margin-left: -4rem;
    grid-template-columns: repeat(1, 1.8fr);
    grid-row: 1;
    grid-column: 1;
  `}
`