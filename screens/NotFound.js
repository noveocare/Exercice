import { View, Text, SafeAreaView } from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  BackIcon,
  Logo404,
  Title404,
  StyledText404,
  StyledButtonRed404,
  StyledButtonWhite404,
  LatoFont
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
          <Text style={{ color: 'white', fontFamily: LatoFont }}>
            Aller à l'accueil
          </Text>
        </StyledButtonRed404>
        <StyledButtonWhite404 onPress={() => props.navigation.replace('Login')}>
          <BackIcon>
            <AntDesign name="arrowleft" size={20} />
          </BackIcon>
          <Text>Retour</Text>
        </StyledButtonWhite404>
      </InnerContainer>
    </StyledContainer>
  )
}

export default NotFound
