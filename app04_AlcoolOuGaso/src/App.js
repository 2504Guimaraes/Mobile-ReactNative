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
  },
  result: {
    marginTop: 35,
    textAlign: 'center'
  }
})

class Verificador extends Component {
  
  constructor(props) {
    super(props)

    this.state = { 
      etanol: 0, 
      gasolina: 0, 
      resultado: null,
      conclusao: '' 
    } 
  }

  pegaEtanol = (vlDigitado) => this.setState({ etanol: vlDigitado })
  
  pegaGasolina = (vlDigitado) => this.setState({ gasolina: vlDigitado })

  verificar = () => {
    const vlResultado = this.state.resultado
    if (vlResultado < 0.7)
      this.setState({ conclusao: 'Use álcool.' })
    else if (vlResultado > 0.7)
      this.setState({ conclusao: 'Use gasolina.' })
    else if (vlResultado == null)
      this.setState({ conclusao: '' })
  }

  calcular = () => {
    const a = this.state.etanol
    const b = this.state.gasolina
    if ((a != null && a != 0) && (b != null && b != 0)) {
      if (!isNaN(a) && !isNaN(b)) {
        this.setState({ resultado: (a / b).toFixed(2) })
        this.verificar()
      }
    }
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
          onChangeText={ this.pegaEtanol }
          placeholder=" Digite o preco da gasolina" />
        <Text style={estilo.inputTitles}>Digite o preço do álcool</Text>
        
        <TextInput
          style={estilo.inputs}
          onChangeText={ this.pegaGasolina }
          placeholder=" Digite o preco do álcool" />
        
        <TouchableHighlight
          onPress={ this.calcular }
          style={estilo.btnVerify}>
            <Text style={estilo.btnTxt}>Verificar</Text>
        </TouchableHighlight>

        <Text style={estilo.result}>
          Et = { this.state.etanol }  |  Gas = { this.state.gasolina }  |  R = { this.state.resultado }, logo { this.state.conclusao }
        </Text>
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