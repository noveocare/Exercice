import { StyledContainer, InnerContainer, Logo404 } from '../components/Styles'
import logo from './../assets/Logo.png'
import { BackIcon } from '../components/Icons'
import React from 'react'
import { AntDesign } from 'react-native-vector-icons'
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
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo404 resizeMode="cover" source={logo} />
        <TextTitle404>Ouch!Cette page n'existe pas</TextTitle404>
        <StyledText404>
          Nous sommes désolé il n'existe aucun contenu à cet endroit.
        </StyledText404>

        <StyledButtonRed404 onPress={() => props.navigation.replace('Login')}>
          <TextButtonWhite>Aller à l'accueil</TextButtonWhite>
        </StyledButtonRed404>
        <StyledButtonWhite404 onPress={() => props.navigation.replace('Login')}>
          <BackIcon>
            <AntDesign name="arrowleft" size={20} />
          </BackIcon>
          <TextButtonPrimary>Retour</TextButtonPrimary>
        </StyledButtonWhite404>
      </InnerContainer>
    </StyledContainer>
  )
}

export default NotFound
