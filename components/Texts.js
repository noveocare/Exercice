import styled, { useTheme } from 'styled-components/native'
import { LatoFont, LatoFontBold } from './Fonts'

export const StyledText = styled.Text`
  padding: 5px;
  font-size: 13px;
  top: 25px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 5px;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.secondary
  }};
  font-family: ${LatoFont};
`

export const StyledText404 = styled.Text`
  padding: 5px;
  font-size: 19px;
  top: 25px;
  height: 50px;
  left: 0px;
  margin-vertical: 3px;
  margin-bottom: 5px;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.secondary
  }};
  font-family: ${LatoFont};
`

export const StyledErrorText = styled.Text`
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.red
  }};
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 10px;
 
  
`

export const StyledTextInput = styled.TextInput`
  padding: 12px;
  padding-right: 55px;
  border-radius: 8px;
  border-color: ${(props) => (props.error  ? props.theme.colors.red : 'rgba(16, 24, 40, 0.075)')};
  font-size: 16px;
  height: 46px;
  margin-vertical: 3px;
  margin-bottom: 6px;
  font-size: 16px;
  border-width: 1.3px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${LatoFont};
`

export const StyledInputLabel = styled.Text`
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};
  font-size: 15px;
  text-align: left;
  top: 5px;
  padding-bottom: 10px;
  font-family: ${LatoFont};
`

export const TextTitle404 = styled.Text`
  font-size: 36px;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};
  padding-top: 30%;
  font-family: ${LatoFontBold};
  text-align: left;
  left: -5%;
`

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};
  padding-top: 29px;
  font-family: ${LatoFontBold};
`

export const textButtonStyle = ({ color }) => `
font-family: ${LatoFont};
font-size: 16px;
text-align: center;
color: ${color};
`

export const TextButtonWhite = styled.Text`
  ${({ theme }) =>
    textButtonStyle({
      color: theme.colors.white
    })}
`

export const TextButtonPrimary = styled.Text`
  ${({ theme }) =>
    textButtonStyle({
      color: theme.colors.primary
    })}
`

export const TextButton = styled.Text`
  ${({ theme }) =>
    textButtonStyle({
      color: theme.colors.red
    })}
`

