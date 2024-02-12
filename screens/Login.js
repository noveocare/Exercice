import React, { useState } from 'react'
import { Formik } from 'formik'
import { View, Text } from 'react-native-web'
import logo from './../assets/Logo.png'
import { AntDesign, Feather } from 'react-native-vector-icons'
import * as yup from 'yup'
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
  Title
} from '../components/Texts'
/*  import {a
 
  Title
} from '../App'  */
import { colors } from '../components/Colors'
const { red, white, primary, secondary } = colors

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
        <Logo resizeMode="cover" source={logo} />
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
                Je me connecte
              </StyledButtonRed>
              <StyledText>
                Vous n'avez pas encore d'accès à votre Espace assuré ?
              </StyledText>
              <StyledButtonWhite onPress={() => setButtonPressed(true)}>
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
