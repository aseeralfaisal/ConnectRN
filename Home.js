import * as React from 'react'
import { TextInput, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack'
import styles from './styles/HomeStyles'
import axios from 'axios'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Cardscan from 'react-native-cardscan'
import firestore from '@react-native-firebase/firestore'

const Tab = createMaterialBottomTabNavigator();

export default function Home({ navigation }) {
  const [cards, setCards] = React.useState([])

  const addCardsFunc = () => {
    firestore().collection("scannedCards").onSnapshot((snap) => {
      setCards(snap.docs.map(doc => doc.data()))
    })
  }
  React.useEffect(() => {
    addCardsFunc()
    return () => {
      addCardsFunc()
    }
  }, [scanner])

  const scanner = async () => {
    try {
      const scan = await Cardscan.scan()
      if (scan.action === "scanned") {
        const { number, expiryMonth, expiryYear, issuer, legalName } = scan.payload
        firestore().collection("scannedCards").add({ number, expiryYear, issuer })
      }
    } catch (Error) {
      console.log({ Error })
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cards</Text>
        <FontAwesomeIcon icon={faUserCircle} size={32} style={{ marginHorizontal: 15 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginHorizontal: 25 }} activeOpacity={0.7} onPress={() => scanner()}>
          <Image source={require('./assets/icons/Plus.png')} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
        <FlatList data={cards} horizontal={true} showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <View>
                <View style={{ backgroundColor: '#fff', width: 250, padding: 12, borderRadius: 12, marginHorizontal: 8 }}>
                  <TouchableOpacity style={{ alignItems: 'flex-start' }}>
                    <View style={{
                      display: "flex", flexDirection: 'row', justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <Text style={[styles.text, { fontSize: 13, margin: 8 }]}>Current Balance</Text>
                      <Text style={[styles.text, { fontSize: 13, margin: 8, fontWeight: 'bold', color: 'blue' }]}>{item.item.issuer}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 18, marginVertical: 15, margin: 8 }]}>{item.item.number}</Text>
                    <View style={{
                      flexDirection: 'row', justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <Text style={[styles.text, { fontSize: 13, margin: 8 }]}>Louis Scottson</Text>
                      <Text style={[styles.text, { fontSize: 13, margin: 8 }]}>Exp. Date 09/26</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }} />
      </View>
    </View>
  )
}
