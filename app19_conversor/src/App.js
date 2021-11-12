import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import style from '../src/style'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moedaEscolhida1: 0,
      moedaEscolhida2: 0
    }
  }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Conversor de Moedas</Text>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>Valor:</Text>
            <TextInput 
              style={style.txtInput} 
              placeholder=" Digite um valor "/>
        </View>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>De: </Text>
            <Picker
              selectedValue={ this.state.moedaEscolhida1 }
              onValueChange={
                (valor, index) => this.setState({ 
                    moedaEscolhida1: valor
                 })
              }
            >
              <Picker.Item key={1} value={1} label="Real" />
              <Picker.Item key={2} value={2} label="Dolar" />
              <Picker.Item key={3} value={3} label="Euro" />
              <Picker.Item key={4} value={4} label="Bitcoin" />
            </Picker>
        </View>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>Para: </Text>
            <Picker
              selectedValue={ this.state.moedaEscolhida2 }
              onValueChange={
                (valor, index) => this.setState({ 
                    moedaEscolhida2: valor
                 })
              }
            >
              <Picker.Item key={1} value={1} label="Real" />
              <Picker.Item key={2} value={2} label="Dolar" />
              <Picker.Item key={3} value={3} label="Euro" />
              <Picker.Item key={4} value={4} label="Bitcoin" />
            </Picker>
        </View>
        <Text style={style.titleValue}>Valor convertido</Text>
        <View style={style.boxValue}> 
          <Text style={style.txtValue}> 2.45 </Text> 
        </View>
      </View>
    )
  }
}