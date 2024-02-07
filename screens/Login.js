import React, { useState } from 'react'
//import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native';
import { Formik } from 'formik'
import { View, Text } from 'react-native-web'
//import { Octicons } from '@expo/vector-icons'
import { AntDesign, Feather } from 'react-native-vector-icons'
import * as yup from 'yup'

import {
  StyledContainer,
  InnerContainer,
  Logo,
  Title,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  Colors,
  StyledButtonRed,
  StyledText,
  StyledButtonWhite,
  StyledErrorText,
  RightIconPassword
} from '../components/styles'
const { white, secondary } = Colors

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format de l'adresse e-mail invalide")
    .required('Champ requis'),
  password: yup
    .string()
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères')
    .required('Champ requis')
})

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const MyTextInput = ({ label, iconId, iconPas, ...props }) => {
    return (
      <View>
        <RightIcon>
          <AntDesign name={iconId} size={15} color={secondary} />
        </RightIcon>
        <RightIconPassword onPress={() => togglePasswordVisibility()}>
          <Feather name={iconPas} size={15} color={secondary} />
        </RightIconPassword>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
      </View>
    )
  }
  return (
    <StyledContainer>
      <InnerContainer>
        <Logo resizeMode="cover" source={require('./../assets/Logo.png')} />
        <Title>Mon espace Adhérent</Title>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, values, errors }) => (
            <StyledFormArea>
              <MyTextInput
                label="Identifiant"
                placeholder="Entrer votre adresse mail"
                placeholderTextColor={secondary}
                iconId="questioncircleo"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {buttonPressed && errors.email && (
                <StyledErrorText>{errors.email}</StyledErrorText>
              )}
              <StyledButton>Identifiant perdu?</StyledButton>
              <MyTextInput
                label="Mot de passe"
                placeholderTextColor={secondary}
                iconPas={showPassword ? 'eye-off' : 'eye'}
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {buttonPressed && errors.password && (
                <StyledErrorText>{errors.password}</StyledErrorText>
              )}
              <StyledButton>Mot de passe perdu?</StyledButton>
              <StyledButtonRed
                onPress={() => props.navigation.replace('NotFound')}
              >
                <Text style={{ color: 'white' }}>Je me connecte</Text>
              </StyledButtonRed>
              <StyledText>
                Vous n'avez pas encore d'accès à votre Espace assuré ?
              </StyledText>
              <StyledButtonWhite onPress={() => setButtonPressed(true)}>
                <Text>Première connexion</Text>
              </StyledButtonWhite>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  )
}

export default Login
