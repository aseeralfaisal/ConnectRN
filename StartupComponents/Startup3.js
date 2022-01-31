// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { startupImage, startupTextArrays, startupTitleArrays } from './StartupData'
import styles from './StartupStyles'

const Stack = createStackNavigator()

export default function Startup3({ navigation }) {
  const [logoImg, setLogoImg] = React.useState(startupImage[2])
  const [startupTitle, setstartupTitle] = React.useState(startupTitleArrays[2])
  const [startupText, setstartupText] = React.useState(startupTextArrays[2])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>connect.</Text>
      <Image source={logoImg} style={styles.startupImage} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={[styles.dot, { backgroundColor: '#353535', width: 20 }]}></View>
      </View>
      <Text style={[styles.text, { marginVertical: 26 }]}>{startupTitle}</Text>
      <Text style={styles.text2}>{startupText}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() => navigation.navigate('OTP')}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style='auto' /> */}
    </View>
  )
}
