import React from 'react'
import { TextInput, Text, View, TouchableOpacity, FlatList, Image, LogBox, Keyboard } from 'react-native'
import styles from './styles/InChatStyles'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import { db } from './backened/Firebase'
// import { collection, serverTimestamp, onSnapshot, getDocs, doc, addDoc, orderBy, query } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import firestore from '@react-native-firebase/firestore'

const Tab = createMaterialBottomTabNavigator();

export default function InChat({ route, navigation }) {

  const [msgs, setMsgs] = React.useState('')
  const [currentUser, setCurrentUser] = React.useState('+8801763089059')
  const [userID, setUserID] = React.useState('')
  const [userList, setUserList] = React.useState([])
  const [readMsg, setReadMsgs] = React.useState([])
  const [keyboardStatus, setKeyboardStatus] = React.useState(false)


  const getMsgs = () => {
    try {
      firestore().collection("users").doc(`${currentUser}-${route.params.user}`).collection("chats").orderBy("timestamp", "desc")
        .onSnapshot(snap => setReadMsgs(snap.docs.map(doc => doc.data())))
    } catch (err) {
      console.error("Error!! " + err)
    }
  }
  React.useEffect(() => {
    getMsgs()
    return () => {
      getMsgs()
    }
  }, [sendMsg])

  React.useEffect(() => {
    (async () => {
      let docs;
      const docRef = firestore().collection("users").doc(`${currentUser}-${route.params.user}`).collection("chats").orderBy("timestamp", "asc")
      docRef.get().then((doc) => {
        if (doc.exists) {
          docs = doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        const msgs = []
        msgs.push(docs.docs.map(doc => doc.data()))
        // console.log(msgs.pop())
      })()
    })
  })

  const sendMsg = async () => {
    try {
      firestore().collection("users").doc(`${route.params.user}-${currentUser}`).collection("chats").add({
        msgs: msgs,
        msgBy: currentUser,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      firestore().collection("users").doc(`${currentUser}-${route.params.user}`).collection("chats").add({
        msgs: msgs,
        msgBy: currentUser,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      setMsgs('')
    } catch (err) {
      console.log("ERROR!! Couldn't send msg " + err);
    }
  }

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.InChatHeader}>
        <TouchableOpacity style={{ marginHorizontal: 40 }} onPress={() => navigation.goBack()}>
          <Image source={require('./assets/icons/LeftArrow.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesomeIcon icon={faUserCircle} size={26} style={{ marginHorizontal: 0 }} />
          <Text style={styles.userNameTitle}>{route.params.user}</Text>
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Image source={require('./assets/icons/MenuVertical.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
        </View>
      </View>

      <FlatList style={{ marginBottom: 140 }} data={readMsg} keyExtractor={(item, idx) => idx} inverted={true} renderItem={({ item, index }) => {
        return (
          <View style={{
            alignItems: item.msgBy == currentUser ? 'flex-end' : 'flex-start',
            justifyContent: 'center', marginHorizontal: 20, marginVertical: 10
          }}
          >
            <Text style={[styles.textMsg, {
              borderBottomRightRadius: item.msgBy == currentUser ? 0 : 20,
              borderBottomLeftRadius: item.msgBy == currentUser ? 20 : 0
            }]} >
              {item.msgs}
            </Text>
          </View>
        )
      }} />

      <View style={{ position: 'absolute', top: keyboardStatus ? '86%' : '83%', right: 20, left: 10, backgroundColor: '#fff', bottom: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 1 }}>
          <TextInput style={styles.msgInput} placeholder="Type your message..." value={msgs} onChangeText={(text) => setMsgs(text)} onSubmitEditing={() => sendMsg()} />
          <TouchableOpacity style={styles.payBg}>
            <Image source={require('./assets/icons/Pay.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
