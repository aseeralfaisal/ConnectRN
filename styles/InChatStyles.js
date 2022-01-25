import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  userNameTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    textAlign: 'left',
    textTransform: 'capitalize'
  },
  InChatHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  },
  msgInput: {
    backgroundColor: '#f6f6f6',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left',
    borderRadius: 50,
    padding: 10,
    width: '80%',
    marginHorizontal: 12,
    fontSize: 16,
    paddingLeft: 20
  },
  payBg: {
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 50
  },
  textMsg: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#f6f6f6',
    color: '#000',
    padding: 16,
    borderRadius: 20,
  },
})
