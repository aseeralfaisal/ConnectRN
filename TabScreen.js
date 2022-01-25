import React from 'react'
import { View, KeyboardAvoidingView, Image } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import ChatStack from './ChatStack';
import styles from './styles/TabScreenStyles'
import { useSelector } from 'react-redux'
import HomeStack from './HomeStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabScreen({ navigation }) {

  return (
    <>
      <Tab.Navigator
        activeColor="#00AEEF"
        inactiveColor="#000"
        shifting={false}
        barStyle={{
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          ...styles.shadow
        }}
      >
        <Tab.Screen
          name='HomeStack'
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/Home.png')}
                style={{
                  height: 26,
                  width: 26,
                  tintColor: color
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Transfer'
          component={Home}
          options={{
            tabBarLabel: 'Transfer',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/DataTransfer.png')}
                style={{
                  height: 26,
                  width: 26,
                  tintColor: color
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Services'
          component={Home}
          options={{
            tabBarLabel: 'Services',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/Services.png')}
                style={{
                  height: 26,
                  width: 26,
                  tintColor: color
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='ChatStack'
          component={ChatStack}
          options={{
            tabBarLabel: 'Chat',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/Chat.png')}
                style={{
                  height: 26,
                  width: 26,
                  tintColor: color
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='More'
          component={Home}
          options={{
            tabBarLabel: 'More',
            headerShown: false,
            tabBarActiveTintColor: '#00AEEF',
            tabBarInactiveTintColor: '#000',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/More.png')}
                style={{
                  height: 26,
                  width: 26,
                  tintColor: color
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>

  )
}
