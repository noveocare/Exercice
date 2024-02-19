import styled from 'styled-components/native'
import { LatoFontBold, LatoFont } from './Fonts'

export const makeButton = ({ backgroundColor, borderColor, font }) => `
 
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 43px;
  border-width: 1.75px;
  border-color: ${borderColor};
  font-family: ${font};
`
export const StyledButtonRed = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      backgroundColor: theme.colors.red,
      borderColor: theme.colors.red,
      font: LatoFont
    })}
`
export const StyledButtonRed404 = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      backgroundColor: theme.colors.red,
      borderColor: theme.colors.red,
      font: LatoFont
    })}
  top: 8%;
  width: 97%;
`

export const StyledButtonWhite = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.secondary,
      font: LatoFont
    })}
  border-color: rgba(16, 24, 40, 0.08);
`

export const StyledButtonWhite404 = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.secondary,
      font: LatoFont
    })}
  border-color: rgba(16, 24, 40, 0.2);
  top: 9%;
  width: 97%;
`

export const StyledButton = styled.TouchableOpacity`
  font-family: ${LatoFont};
  font-size: 14px;
  text-align: left;
  padding-bottom: 25px;
`
