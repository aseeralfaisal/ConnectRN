import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  text2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 23,
    textAlign: 'center',
    width: 340,
  },
  startupImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  btn: {
    backgroundColor: '#353535',
    paddingHorizontal: 140,
    paddingVertical: 16,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  btnContainer: {
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#CDD9E3',
    borderRadius: 50,
    margin: 10,
  },
})
