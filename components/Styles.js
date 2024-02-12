import styled from 'styled-components/native'

export const colors = {
  primary: '#101828',
  secondary: '#667085',
  white: '#FFFFFF',
  red: '#E94B58 '
}
const { primary, secondary, white, red } = colors
export const StyledContainer = styled.View`
  flex: 1;
  padding-top: 48px;
  padding-right: 16px;
  padding-bottom: 48px;
  padding-left: 16px;
  background-color: ${white};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-left: 0px;
`

export const Logo = styled.Image`
  align-items: center;
`
export const Logo404 = styled.Image`
  align-items: center;
  top: 30px;
`

export const StyledFormArea = styled.View`
  padding-top: 35px;
`
