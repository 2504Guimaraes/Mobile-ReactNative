import React, { Component } from 'react'
import { View, Text, Switch, ScrollView, TextInput, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import style from '../src/style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusDia: false,
      statusTamanho: false,
      fraseGuardada: 'Digite algo aqui e guarde essa frase.'
    }
    this.changeDayToNight = this.changeDayToNight.bind(this)
    this.tellUserAboutStorage = this.tellUserAboutStorage.bind(this)
  }

  async componentDidMount() {
    await AsyncStorage.getItem('frase_armazenada')
      .then( vlItemArmazenado => {
        this.setState({ 
          fraseGuardada: vlItemArmazenado 
        })
      })
  }

  async componentDidUpdate(_, statsAnterior) {
    const frase = this.state.fraseGuardada
    if (statsAnterior !== frase)
      await AsyncStorage.setItem('frase_armazenada', frase)
  }

  changeDayToNight() {
    const estilo = { paddingLeft: 15, paddingRight: 15 }
    if (this.state.statusDia === false) {
      estilo.backgroundColor = 'transparent' 
    }
    else { estilo.backgroundColor = 'gray' }
    return estilo
  }

  tellUserAboutStorage() {
    alert('Frase e configuração de aparência salvas!')
    Keyboard.dismiss()
  }

  render() {
    return(
      <View style={ this.changeDayToNight() }>
        <Text style={style.title}>Aplicativo Frases</Text>
        <View style={style.boxButtons}>
          <Text>
            { this.state.statusDia ? 'Noite' : 'Dia' }
          </Text>
          <Switch 
            value={ this.state.statusDia }
            onValueChange= { 
              (vlDia) => { 
                this.setState({ statusDia: vlDia })
                this.tellUserAboutStorage()
              }
          }/>
          
          <Text>
            { this.state.statusTamanho ? 'Grande' : 'Pequeno' }
          </Text>
          <Switch 
            value={ this.state.statusTamanho }
            onValueChange= { vlSize => this.setState({ statusTamanho: vlSize }) } />
        </View>
        <ScrollView style={style.boxTexto}>
          <TextInput
            onChangeText={ txtDigitado => this.setState({ fraseGuardada: txtDigitado }) }
            style={style.txt}
            multiline={true}
            defaultValue={ this.state.fraseGuardada }
          />
          {/* <Text>{ this.state.fraseGuardada }</Text> */}
        </ScrollView>
      </View>
    )
  }
}