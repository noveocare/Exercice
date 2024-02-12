// Theme.js
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

const myTheme = {
  colors: {
    primary: '#101828',
    secondary: '#667085',
    white: '#FFFFFF',
    redBg: '#E94B58'
  },
  fonts: {
    LatoFont: 'Lato-Regular',
    LatoFontBold: 'Lato-Bold'
  }
}

const Theme = ({ children }) => {
  return <StyledThemeProvider theme={myTheme}>{children}</StyledThemeProvider>
}

export default Theme
