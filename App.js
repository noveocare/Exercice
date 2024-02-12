// App.js
import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Theme from './components/Theme';
import { LatoFont, LatoFontBold } from './components/Fonts';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Theme>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </Theme>
  );
}
