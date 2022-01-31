// import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { startupImage, startupTextArrays, startupTitleArrays } from './StartupData'
import styles from './StartupStyles'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'

const Stack = createStackNavigator()

export default function Startup({ navigation }) {

  const [logoImg, setLogoImg] = React.useState(startupImage[0])
  const [startupTitle, setstartupTitle] = React.useState(startupTitleArrays[0])
  const [startupText, setstartupText] = React.useState(startupTextArrays[0])


  // const mobileNumber = useSelector((state) => state.mobileNumber)
  // // console.log(mobileNumber)

  // React.useEffect(() => {
  //     firestore().collection("users").onSnapshot((snap) => {
  //       snap.docs.map(doc => doc.data().user == mobileNumber && navigation.navigate('TabScreen'))
  //     })
  // })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>connect.</Text>
      <Image source={logoImg} style={styles.startupImage} />
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.dot, { backgroundColor: '#353535', width: 20 }]}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
      <Text style={[styles.text, { marginVertical: 26 }]}>{startupTitle}</Text>
      <Text style={styles.text2}>{startupText}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() => navigation.navigate('Startup2')}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style='auto' /> */}
    </View>
  )
}
