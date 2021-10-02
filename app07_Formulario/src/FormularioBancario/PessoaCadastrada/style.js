import { StyleSheet, Dimensions } from "react-native";

const stylePessoaCadastrada = StyleSheet.create({
  personsData: {
    marginTop: 0,
    backgroundColor: '#ffffff',
    padding: 15, 
    marginLeft: 15, marginRight: 15, 
    marginBottom: 15
  },
  title: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 22,
    fontWeight: 'bold'
  },
  pontilhado: {
    marginTop: 15,
    width: Dimensions.get('window').width - 30,
    marginLeft: -15,
    borderColor: '#e3e3e3',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 1,
    marginBottom: 15
  },
  txt: {
    fontSize: 16
  }
})

export default style