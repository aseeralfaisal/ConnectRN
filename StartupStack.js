import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import cc1 from './assets/icons/cc1.png'
import cc2 from './assets/icons/cc2.png'
import Startup from './StartupComponents/Startup'
import Startup2 from './StartupComponents/Startup2'
import Startup3 from './StartupComponents/Startup3'

const Stack = createStackNavigator()

export default function StartupStack({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        >
        <Stack.Screen name='Startup' component={Startup} />
        <Stack.Screen name='Startup2' component={Startup2} />
        <Stack.Screen name='Startup3' component={Startup3} />
      </Stack.Navigator>
    </View>
  )
}
