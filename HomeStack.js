import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'

const Stack = createStackNavigator()

export default function HomeStack({ navigation, currentUser }) {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </View>
  )
}
