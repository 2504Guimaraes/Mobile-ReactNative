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
    this.changeBoardColor = this.changeBoardColor.bind(this)
    this.changeStoredTxtColor = this.changeStoredTxtColor.bind(this)
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

  changeBoardColor() {
    const estilo = { 
      display: 'flex',
      height: 360,
      marginTop: 15,
      padding: 15,
      marginBottom: 15,
      borderWidth: 2
    }
    if (this.state.statusDia === false) {
      estilo.backgroundColor = '#f5f5f5'
    }
    else { estilo.backgroundColor = 'gray' }
    return estilo
  }

  changeStoredTxtColor() {
    const estilo = { 
      flex: 1,
      fontSize: 16,
      fontStyle: 'italic'
    }
    if (this.state.statusDia === false) {
      estilo.color = '#48a868'
    }
    else { estilo.color = '#fff' }
    return estilo
  }

  tellUserAboutStorage() {
    alert('Frase e configuração de aparência salvas!')
    Keyboard.dismiss()
  }

  render() {
    return(
      <View style={ style.phoneScreen }>
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
        <ScrollView style={ this.changeBoardColor() }>
          <TextInput
            onChangeText={ txtDigitado => this.setState({ fraseGuardada: txtDigitado }) }
            style={ this.changeStoredTxtColor() }
            multiline={true}
            defaultValue={ this.state.fraseGuardada }
          />
          {/* <Text>{ this.state.fraseGuardada }</Text> */}
        </ScrollView>
      </View>
    )
  }
}