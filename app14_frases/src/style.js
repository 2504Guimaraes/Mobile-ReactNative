import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  phoneScreen: {
    backgroundColor: 'transparent',
    paddingLeft: 15, paddingRight: 15
  },
  title: {
    paddingTop: 15,
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  },
  boxButtons: {
    marginTop: 15, 
    marginBottom: 15
  },
  boxTexto: {
    display: 'flex',
    height: 360,
    marginTop: 15,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
  },
  txt: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#48a868'
  }
})

export default style