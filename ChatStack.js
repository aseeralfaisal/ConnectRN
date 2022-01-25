import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Chat from './Chat'
import InChat from './InChat'

const Stack = createStackNavigator()

export default function ChatStack({ navigation, currentUser }) {
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='InChat' component={InChat} />
      </Stack.Navigator>
    </View>
  )
}
