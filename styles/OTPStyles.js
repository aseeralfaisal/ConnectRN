import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    textAlign: 'left',
    marginVertical: 20
  },
  boldTitle: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 40
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    textAlign: 'left',
  },
  miniText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'left',
  },
  btn: {
    backgroundColor: '#353535',
    paddingHorizontal: 135,
    paddingVertical: 16,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  btnContainer: {
    marginTop: 300,
  },
  userOptions: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
    width: 340
  },
  userOptionsText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 40,
    paddingVertical: 4,
    color: '#000',
    width: 90,
  },
  options: {
    backgroundColor: '#353535',
    borderRadius: 10
  },
  nOptions: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  inputStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    paddingVertical: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000'
  },
  codeInput: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 26,
    paddingVertical: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#000',
    marginHorizontal: 20,
    width: '70%',
    textAlign: 'center',
  },
  phnNumberInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginHorizontal: 4
  },
  popup: {
    backgroundColor: '#F4F7FA',
    position: 'absolute',
    top: '58%',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  whitepart: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    paddingTop: 80,
    paddingBottom: 40
  }
})
