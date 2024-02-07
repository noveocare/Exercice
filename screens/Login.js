import React, { useState } from 'react'
//import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native';
import { Formik } from 'formik'
import { View } from 'react-native-web'
import { Octicons } from '@expo/vector-icons'
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
  ButtonText,
  Colors,
  StyledButtonRed,
  StyledText,
  StyledButtonWhite,
  StyledErrorText
} from '../components/styles'
const { secondary, red } = Colors

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format de l'adresse e-mail invalide")
    .required('Champ requis'),
  password: yup
    .string()
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères')
    .required('Champ requis')
    .matches(
      '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
})

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const MyTextInput = ({ label, iconId, iconPas, ...props }) => {
    return (
      <View>
        <RightIcon onPress={togglePasswordVisibility}>
          <AntDesign name={iconId} size={15} color={secondary} />
          <Feather name={iconPas} size={15} color={secondary} />
        </RightIcon>
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
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isSubmitting
          }) => (
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
              {errors.email && (
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
              />{' '}
              {errors.password && (
                <StyledErrorText>{errors.password}</StyledErrorText>
              )}
              <StyledButton>Mot de passe perdu?</StyledButton>
              <StyledButtonRed
                onPress={() => props.navigation.replace('NotFound')}
              >
                Je me connecte
              </StyledButtonRed>
              <StyledText>
                Vous n'avez pas encore d'accès à votre Espace assuré ?
              </StyledText>
              <StyledButtonWhite
                onPress={() => props.navigation.replace('NotFound')}
              >
                Première connexion
              </StyledButtonWhite>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  )
}

export default Login
