import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import store from './redux/store'
import { Provider } from 'react-redux'
import TabScreen from './TabScreen'
import StartupStack from './StartupStack'
import OTP from './OTP';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="StartupStack"
        >
          <Stack.Screen name='StartupStack' component={StartupStack} />
          <Stack.Screen name='TabScreen' component={TabScreen} />
          <Stack.Screen name='OTP' component={OTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 40
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
