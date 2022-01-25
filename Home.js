import React from 'react'
import { TextInput, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack'
import styles from './styles/HomeStyles'
import axios from 'axios'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Cardscan from 'react-native-cardscan'

const Tab = createMaterialBottomTabNavigator();

export default function Home({ navigation }) {
  const scanner = () => {
    Cardscan.scan()
      .then(({ action, payload, canceled_reason }) => {
        if (action === 'scanned') {
          const { number, expiryMonth, expiryYear, issuer, legalName } = payload;
          console.log({ number, expiryMonth, expiryYear, issuer, legalName })
        }
      })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cards</Text>
        <FontAwesomeIcon icon={faUserCircle} size={32} style={{ marginHorizontal: 15 }} />
      </View>
      <View>
        <TouchableOpacity style={{ marginLeft: 60 }} activeOpacity={0.7} onPress={() => scanner()}>
          <Image source={require('./assets/icons/Plus.png')} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </SafeAreaView>
  )
}
