import styled from 'styled-components/native'

export const Colors = {
  primary: '#101828',
  secondary: '#667085',
  white: '#FFFFFF',
  red: '#E94B58 '
}
export const LatoFont = 'Lato-Regular'
export const LatoFontBold = 'Lato-Bold'

const { primary, secondary, white, red } = Colors

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
export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${primary};
  padding-top: 23px;
  font-family: ${LatoFontBold};
`
export const Title404 = styled.Text`
  font-size: 33px;
  color: ${primary};
  padding-top: 90px;
  font-family: ${LatoFontBold};
`

export const StyledFormArea = styled.View`
  padding-top: 35px;
`
export const StyledInputLabel = styled.Text`
  color: ${primary};
  font-size: 15px;
  text-align: left;
  top: 5px;
  padding-bottom: 10px;
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
  color: ${secondary};
  font-family: ${LatoFont};
`

export const RightIcon = styled.TouchableOpacity`
  right: 10px;
  top: 50px;
  position: absolute;
  z-index: 1;
  color: ${secondary};
`
export const RightIconPassword = styled.TouchableOpacity`
  right: 10px;
  top: 50px;
  position: absolute;
  z-index: 1;
  color: ${secondary};
`

export const BackIcon = styled.TouchableOpacity`
  left: 33%;
  top: 8px;
  position: absolute;
  z-index: 1;
  color: ${primary};
`
export const StyledButton = styled.TouchableOpacity`
  color: ${red};
  font-size: 15px;
  text-align: left;
  font-family: ${LatoFont};
  padding-bottom: 25px;
`

export const StyledButtonRed = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 40px;
  color: ${white};
`
export const StyledButtonRed404 = styled.TouchableOpacity`
  padding: 15px;
  top: 8%;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 40px;
  width: 100%;
`

export const StyledText = styled.Text`
  padding: 5px;
  font-size: 13px;
  top: 25px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 5px;
  color: ${secondary};
  font-family: ${LatoFont};
`

export const StyledText404 = styled.Text`
  padding: 5px;
  font-size: 18px;
  top: 25px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 5px;
  color: ${secondary};
  font-family: ${LatoFont};
`

export const StyledButtonWhite = styled.TouchableOpacity`
  background-color: ${white};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 40px;
  color: ${primary};
  border-color: rgba(16, 24, 40, 0.2);
  border-width: 1.75px;
`

export const StyledButtonWhite404 = styled.TouchableOpacity`
  background-color: ${white};
  top: 9%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 40px;
  color: ${primary};
  border-color: rgba(16, 24, 40, 0.2);
  border-width: 1.75px;
  width: 100%;
`

export const StyledErrorText = styled.Text`
  color: ${primary};
  font-size: 14px;
  margin-top: 5px;
  font-family: ${LatoFont};
`
