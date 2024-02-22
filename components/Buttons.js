import styled, { useTheme } from 'styled-components/native'

export const makeButton = ({ theme, backgroundColor, borderColor, font }) => `
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 5px;
  height: 43px;
  border-width: 1.75px;
  border-color: ${borderColor};
  font-family: ${theme.fonts.LatoFont};
`

export const StyledButtonRed = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      theme,
      backgroundColor: theme.colors.red,
      borderColor: theme.colors.red
    })}
`

export const StyledButtonRed404 = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      theme,
      backgroundColor: theme.colors.red,
      borderColor: theme.colors.red
    })}
  top: 8%;
`

export const StyledButtonWhite = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      theme,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.secondary
    })}
  border-color: rgba(16, 24, 40, 0.15);
`

export const StyledButtonWhite404 = styled.TouchableOpacity`
  ${({ theme }) =>
    makeButton({
      theme,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.secondary
    })}
  border-color: rgba(16, 24, 40, 0.15);
  top: 9%;
`

export const StyledButton = styled.TouchableOpacity`
  font-family: ${(props) => {
    const theme = useTheme()
    return theme.fonts.LatoFont
  }};
  font-size: 14px;
  text-align: left;
  padding-bottom: 22px;
`
