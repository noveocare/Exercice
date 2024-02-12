import styled from 'styled-components/native'
import { colors } from './Styles'
import { LatoFontBold, LatoFont } from './Fonts'

const { red, white, primary, secondary } = colors

export const makeButton = ({ backgroundColor, color, borderColor, font }) => `
  padding: 15px;
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 40px;
  color: ${color};
  border-width: 1.75px;
  border-color: ${borderColor};
  font-family: ${font};

`
export const StyledButtonRed = styled.TouchableOpacity`
  ${makeButton({
    backgroundColor: red,
    color: white,
    borderColor: red,
    font: LatoFont
  })}
`
export const StyledButtonRed404 = styled.TouchableOpacity`
  ${makeButton({
    backgroundColor: red,
    color: white,
    borderColor: red,
    font: LatoFont
  })}
  top: 8%;
  width: 100%;
`

export const StyledButtonWhite = styled.TouchableOpacity`
  ${makeButton({
    backgroundColor: white,
    color: primary,
    borderColor: secondary,
    font: LatoFont
  })}
  border-color: rgba(16, 24, 40, 0.2);
`
export const StyledButtonWhite404 = styled.TouchableOpacity`
  ${makeButton({
    backgroundColor: white,
    color: primary,
    borderColor: secondary,
    font: LatoFont
  })}
  border-color: rgba(16, 24, 40, 0.2);
  top: 9%;
  width: 100%;
`
export const StyledButton = styled.TouchableOpacity`
  font-family: ${LatoFont};
  font-size: 15px;
  text-align: left;
  padding-bottom: 25px;
  color: ${red};
`
