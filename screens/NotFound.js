import { View, Text, SafeAreaView } from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  BackIcon,
  Logo404,
  Title404,
  StyledText404,
  StyledButtonRed404,
  StyledButtonWhite404
} from '../components/styles'
import React from 'react'
import { AntDesign } from 'react-native-vector-icons'
const NotFound = (props) => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo404 resizeMode="cover" source={require('./../assets/Logo.png')} />
        <Title404>Ouch!Cette page n'existe pas</Title404>
        <StyledText404>
          Nous sommes désolé il n'existe aucun contenu à cet endroit.
        </StyledText404>
        <StyledButtonRed404 onPress={() => props.navigation.replace('Login')}>
          Aller à l'acceuil
        </StyledButtonRed404>
        <StyledButtonWhite404 onPress={() => props.navigation.replace('Login')}>
          <BackIcon>
            <AntDesign name="arrowleft" size={20} />
          </BackIcon>
          Retour
        </StyledButtonWhite404>
      </InnerContainer>
    </StyledContainer>
  )
}

export default NotFound
