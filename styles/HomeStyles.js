import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000000',
    flex: 1,
  },
  chatHeader: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
    textAlign: 'left',
    marginVertical: 20
  },
  header: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boldTitle: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 40
  },
  userNames: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'left',
    textTransform: 'capitalize'
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    textAlign: 'left',
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    paddingTop: 500,
    paddingBottom: 40
  },
  whitepartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-120%'
  }
})
