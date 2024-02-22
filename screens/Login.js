 import React, { useState } from 'react'
import { Formik } from 'formik'
import { Text, View } from 'react-native'
import logo from './../assets/Logo.png'
import { AntDesign, Feather } from 'react-native-vector-icons'
import * as yup from 'yup'
import { useTheme } from 'styled-components/native'
import {
  StyledContainer,
  InnerContainer,
  Logo,
  StyledFormArea
} from '../components/Styles'
import {
  StyledButton,
  StyledButtonRed,
  StyledButtonWhite
} from '../components/Buttons'
import { RightIcon, RightIconPassword } from '../components/Icons'
import {
  StyledText,
  StyledTextInput,
  StyledInputLabel,
  StyledErrorText,
  Title,
  TextButtonPrimary,
  TextButtonWhite
} from '../components/Texts'
import loginService from '../services/loginService'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format de l'adresse e-mail invalide")
    .required('Le champ Identifiant ne peut pas être vide'),
  password: yup
    .string()
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères')
    .required('Le champ Mot de passe ne peut pas être vide')
})

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)
  const theme = useTheme()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (values) => {
    try {
      const response = await loginService.login({
        grant_type: PASSWORD,
        login: values.email,
        password: values.password
      })

      console.log("Réponse de l'API:", response)
    } catch (error) {
      console.error(
        "Erreur lors de la demande d'authentification:",
        error.message
      )
    }
  }

  const MyTextInput = ({
    label,
    iconId,
    iconPas,
    errors,
    touched,
    ...props
  }) => {
    const hasError = errors

    return (
      <>
        <View style={{ position: 'relative' }}>
          <RightIcon>
            <AntDesign name={iconId} size={15} color={theme.colors.secondary} />
          </RightIcon>
          <RightIconPassword onPress={() => togglePasswordVisibility()}>
            <Feather name={iconPas} size={15} color={theme.colors.secondary} />
          </RightIconPassword>
          <StyledInputLabel>{label}</StyledInputLabel>
          <StyledTextInput {...errors} {...props} />
          {hasError && <StyledErrorText>{errors} </StyledErrorText>}
        </View>
      </>
    )
  }

  return (
    <StyledContainer>
      <InnerContainer>
        <Logo resizeMode="cover" source={logo} />
        <Title>Mon espace Adhérent</Title>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched
          }) => (
            <StyledFormArea >
              <MyTextInput
                label="Identifiant"
                placeholder="Entrer votre adresse mail"
                placeholderTextColor={theme.colors.secondary}
                iconId="questioncircleo"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {buttonPressed && errors.email && (
                <StyledErrorText>{errors.email}</StyledErrorText>
              )}
              <StyledButton>
                <Text style={{ color: theme.colors.red }}>
                  Identifiant perdu?
                </Text>
              </StyledButton>
              <MyTextInput
                label="Mot de passe"
                placeholderTextColor={theme.colors.secondary}
                iconPas={showPassword ? 'eye' : 'eye-off'}
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {buttonPressed && errors.password && (
                <StyledErrorText>{errors.password}</StyledErrorText>
              )}
              <StyledButton>
                <Text style={{ color: theme.colors.red }}>
                  Mot de passe perdu?
                </Text>
              </StyledButton>
              <StyledButtonRed
                onPress={() => props.navigation.replace('NotFound')}
              >
                <TextButtonWhite>Je me connecte</TextButtonWhite>
              </StyledButtonRed>
              <StyledText>
                <Text>
                  Vous n'avez pas encore d'accès à votre Espace assuré ?
                </Text>
              </StyledText>
              <StyledButtonWhite
                onPress={() => {
                  setButtonPressed(true)
                  setFieldValue('email', values.email)
                  setFieldValue('password', values.password)
                }}
              >
                <TextButtonPrimary>Première connexion</TextButtonPrimary>
              </StyledButtonWhite>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  )
}

export default Login
