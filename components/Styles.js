import styled from 'styled-components/native'

export const StyledContainer = styled.View`
  flex: 1;
  padding-top: 20%;
  padding-right: 16px;
  padding-bottom: 48px;
  padding-left: 16px;
  background-color: ${(props) => props.theme.colors.white};
`

export const InnerContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const Logo = styled.Image`
  align-items: center;
`
export const Logo404 = styled.Image`
  align-items: center;
  top: 20px;
`

export const StyledFormArea = styled.View`
  padding-top: 35px;
  maxWidth: "400px" ;
  width: "100%" ;
`
