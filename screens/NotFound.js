import { View, Text, SafeAreaView } from 'react-native'
import {StyledContainer,InnerContainer,BackIcon,Logo404,Title404,StyledText404,StyledButtonRed404,StyledButtonWhite404,Colors} from '../components/styles'
import React from 'react'
import { Octicons } from '@expo/vector-icons'
const { secondary, red } = Colors

const NotFound = (props) => {
  return (
    <StyledContainer>
    <InnerContainer>
        <Logo404  resizeMode="cover" source={require('./../assets/Logo.png')}/>
        <Title404>Ouch!Cette page n'existe pas</Title404>
        <StyledText404>Nous sommes désolé il n'existe aucun contenu à cet endroit.</StyledText404>
        <StyledButtonRed404 onPress={() => props.navigation.replace("Login")}>Aller à l'acceuil</StyledButtonRed404>
        <StyledButtonWhite404 onPress={() => props.navigation.replace("Login")}>
        <BackIcon>
          <Octicons name="arrow-left" size={20} color={secondary} />
          </BackIcon>Retour</StyledButtonWhite404>


      
    </InnerContainer>
</StyledContainer>

  )           
}

export default NotFound