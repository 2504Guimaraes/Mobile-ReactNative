import React,{ Component } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Image, 
  TextInput,
  TouchableHighlight
} from 'react-native'


const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    paddingTop: 15,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  imgWrapper: {
    marginTop: 15,
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
  },
  imgBox: { 
    backgroundColor: 'lightblue', 
    padding: 15,
    borderRadius: 100,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, borderStyle: 'dashed'
  },
  fuelImg: {
    height: 65, width: 65,
    backgroundColor: 'transparent',
    marginRight: 6
  },
  inputTitles: {
    marginTop: 8,
    fontWeight: 'bold'
  },
  inputs: {
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3
  },
  btnVerify: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#41b9ff',
    borderWidth: 2,
    borderColor: '#096eb4',
    alignItems: 'center',
    borderRadius: 3
  },
  btnTxt: {
    color: '#fff', 
    fontWeight: 'bold'
  }
})

class Verificador extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text style={estilo.title}>Álcool ou Gasolina</Text>
        <View style={estilo.imgWrapper}>
          <View style={estilo.imgBox}>
            <Image style={estilo.fuelImg} 
              source={require('./images/img-gasolina.png')}/>
          </View>
        </View>
        <Text style={estilo.inputTitles}>Digite o preço da gasolina</Text>
        <TextInput
          style={estilo.inputs}
          placeholder=" Digite o preco da gasolina" />
        <Text style={estilo.inputTitles}>Digite o preço do álcool</Text>
        <TextInput
          style={estilo.inputs}
          placeholder=" Digite o preco do álcool" />
        
        <TouchableHighlight
          style={estilo.btnVerify}>
            <Text style={estilo.btnTxt}>Verificar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Verificador/>
    </View>
  )
}