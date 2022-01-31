import React from 'react'
import { TextInput, Text, View, TouchableOpacity, FlatList, Image, ScrollView, LogBox } from 'react-native'
import styles from './styles/ChatStyles'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import { db } from './backened/Firebase.js.old'
// import { collection, getDocs, query, onSnapshot, doc, orderBy } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faCoffee, faStop, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialBottomTabNavigator();

export default function Chat({ navigation }) {

  const [msgs, setMsgs] = React.useState('')
  const [currentUser, setCurrentUser] = React.useState('+8801763089059')
  const [userID, setUserID] = React.useState('')
  const [userList, setUserList] = React.useState([])
  const [readMsg, setReadMsgs] = React.useState([])

  const getUserList = () => {
    //Firebase9
    // onSnapshot(collection(db, "users"), orderBy("user", "desc"), (snap) => {
    //   setUserList(snap.docs.map(doc => doc.data()))
    // })
    
    firestore().collection("users").orderBy("user", "desc")
      .onSnapshot(snap => setUserList(snap.docs.map(doc => doc.data())))
  }
  React.useEffect(() => {
    getUserList()
    return () => {
      getUserList()
    }
  }, [])
  // LogBox.ignoreLogs(['Setting a timer for a long period of time', 'Can\'t perform a React state update on an unmounted component'])

  return (
    <View style={styles.container}>
      <View style={styles.chatHeader}>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity>
          <Image source={require('./assets/icons/Plus.png')} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', backgroundColor: '#fff', height: '100%', borderRadius: 50, }}>
        <FlatList style={{ marginTop: 15 }} data={userList} keyExtractor={(item, idx) => idx} renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ alignItems: 'flex-start', marginLeft: 20, marginVertical: 5, }}
              onPress={() => navigation.navigate('InChat', {
                user: item.user
              })}>
              <View style={{ display: item.user !== currentUser ? 'flex' : 'none', flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faUserCircle} size={36} style={{ marginHorizontal: 15 }} />
                <Text style={styles.userNames} >
                  {item.user}
                </Text>
                <View style={{ marginHorizontal: 120, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={[styles.text, { fontSize: 10,  }]}>Now</Text>
                  <FontAwesomeIcon icon={faCircle} size={12} style={{ color: '#00AEEF' }} />
                </View>
              </View>
            </TouchableOpacity>
          )
        }} />
      </View>
    </View>
  )
}
