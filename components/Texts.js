import styled, { useTheme } from 'styled-components/native'
import { ThemeProvider } from 'styled-components'

import { colors } from './Styles'
import { LatoFont, LatoFontBold } from './Fonts'

//const { primary, secondary } = colors;

export const StyledText = styled.Text`
  padding: 5px;
  font-size: 13.5px;
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
  font-size: 18px;
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

export const StyledErrorText = styled.Text`
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};
  font-size: 14px;
  margin-top: 5px;
  font-family: ${LatoFont};
`

export const StyledTextInput = styled.TextInput`
  padding: 5px;
  padding-left: 10px;
  padding-right: 55px;
  border-radius: 8px;
  border-color: rgba(16, 24, 40, 0.2);
  font-size: 18px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  border-width: 1.75px;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.secondary
  }};
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

export const Title404 = styled.Text`
  font-size: 33px;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};
  padding-top: 90px;
  font-family: ${LatoFontBold};
`

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${(props) => {
    const theme = useTheme()
    return theme.colors.primary
  }};

  padding-top: 23px;
  font-family: ${LatoFontBold};
`
