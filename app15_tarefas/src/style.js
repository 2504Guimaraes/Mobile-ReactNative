import { Dimensions, StyleSheet } from "react-native"
import { floor } from "react-native-reanimated"

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
  boxBtnInput: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15, 
    marginBottom: 15
  },
  input: {
    borderWidth: 2,
    fontSize: 16,
    borderColor: '#000',
    width: (Dimensions.get('window').width - 60) - 30
  },
  btn: {
    backgroundColor: '#000',
    height: 55, width: 55,
    marginLeft: 5
  },
  btn2: {
    backgroundColor: '#0560a9',
    height: 55, width: 55,
    marginLeft: 5
  },
  txtBtn: {
    marginTop: 14,
    marginLeft: 21,
    fontSize: 20,
    color: '#fff'
  },
  areaTarefas: {
    borderWidth: 2,
    height: Dimensions.get('window').height - 180,
    padding: 15
  },
  tarefa: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  txtTarefa: {
    marginTop: 5,
    marginRight: 10,
    fontSize: 16, color: '#000'
  },
  btnApagar: {
    width: 75, 
    paddingTop: 5,
    paddingLeft: 10, paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: 'red', 
    color: '#fff'
  },
  txtBtnApagar: { 
    color: '#fff', fontSize: 16 
  }
})

export default style