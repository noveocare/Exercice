import {
  StyledContainer,
  InnerContainer,
  Logo404,
  StyledFormArea
} from '../components/Styles'
import logo from './../assets/Logo.png'
import { BackIcon } from '../components/Icons'
import React from 'react'
import { AntDesign } from 'react-native-vector-icons'
import { debugService } from '../services/loginService'

import {
  StyledButtonRed404,
  StyledButtonWhite,
  StyledButtonWhite404
} from '../components/Buttons'
import {
  StyledText404,
  TextButtonPrimary,
  TextButtonWhite,
  TextTitle404
} from '../components/Texts'

const NotFound = (props) => {
  const handleBackButton = async () => {
    try {
      const result = await debugService()
      console.log('Debug API Result:', result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo404 resizeMode="cover" source={logo} />
        <StyledFormArea style={{ paddingTop: '10px' }}>
          <TextTitle404>Ouch!Cette page n'existe pas</TextTitle404>
          <StyledText404>
            Nous sommes désolé il n'existe aucun contenu à cet endroit.
          </StyledText404>
          <StyledButtonRed404 onPress={() => props.navigation.replace('Login')}>
            <TextButtonWhite>Aller à l'accueil</TextButtonWhite>
          </StyledButtonRed404>
          <StyledButtonWhite404 onPress={handleBackButton}>
            <BackIcon>
              <AntDesign name="arrowleft" size={20} />
            </BackIcon>
            <TextButtonPrimary>Retour</TextButtonPrimary>
          </StyledButtonWhite404>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  )
}

export default NotFound
