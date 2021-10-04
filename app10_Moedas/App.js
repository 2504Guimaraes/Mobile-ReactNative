import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const style = StyleSheet.create({
  app: {
    height: Dimensions.get('window').height,
    backgroundColor: 'pink',
    paddingLeft: 10,
    paddingRight: 10
  },
  titles: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  inputTitles: {
    marginTop: 15,
    fontSize: 18,
    color: '#000'
  },
  input1: {
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3
  },
  inputBox: {
    marginTop: 15,
    backgroundColor: 'red',
    padding: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  de: {
    marginTop: 14,
    fontSize: 18,
    color: '#000',
    marginRight: 15
  },
  para: {
    marginTop: 14,
    fontSize: 18,
    color: '#000',
    marginRight: 15
  },
  escolha1: {
    width: 280
  },
  escolha2: {
    width: 265
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moeda1: 'Real',
      momeda2: 'Dólar'
    }
  }

  render() {
    return(
      <View style={style.app}>
        <Text style={style.titles}>Conversor de Moedas</Text>
        <Text style={style.titles}>Dólar, Real e Euro</Text>
        <Text style={style.inputTitles}>Valor digitado</Text>
        <TextInput
          placeholder={"Digite a quantia desejada"}
          style={style.input1}
        />
        <View style={style.inputBox}>
          <Text style={style.de}>De:</Text>
            <Picker
              style={style.escolha1}
              selectedValue={ this.state.moeda1 }
              onValueChange={ (itemValue,itemIndex) => this.setState({ moeda1: itemValue }) }
            >
            <Picker.Item key={1} value={"Real"} label="Real"/>
            <Picker.Item key={2} value={"Dólar"} label="Dólar"/>
            <Picker.Item key={3} value={"Euro"} label="Euro"/>
          </Picker>
        </View>
        <View style={style.inputBox}>
          <Text style={style.para}>Para:</Text>
            <Picker
              style={style.escolha2}
              selectedValue={ this.state.moeda2 }
              onValueChange={ (itemValue,itemIndex) => this.setState({ moeda2: itemValue }) }
            >
            <Picker.Item key={1} value={"Real"} label="Real"/>
            <Picker.Item key={2} value={"Dólar"} label="Dólar"/>
            <Picker.Item key={3} value={"Euro"} label="Euro"/>
          </Picker>
        </View>
      </View>
    )
  }
}

export default App