import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    paddingLeft: 3,
    paddingRight: 3
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  caixaFilmes: {
    marginTop: 15,
    height: Dimensions.get('window').height - 95,
    marginBottom: 15,
  },
  filme: {
    padding: 15,
    borderColor: '#dddddd'
  },
  boxTitleFilme: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  titleFilme: {
    fontSize: 21,
    color: '#000',
    fontWeight: 'bold'
  },
  lerMais: {
    marginTop: 8,
    fontSize: 16,
    color: '#0273cc'
  },
  filmeImg: {
    marginTop: 15,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 5
  }
})

export default style