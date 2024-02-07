import { Text } from 'react-native'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login.js'
import NotFound from './screens/NotFound.js'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf')
  })
  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
