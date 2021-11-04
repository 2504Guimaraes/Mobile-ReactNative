import React, { Component } from 'react'
import { View, Text, Switch, ScrollView, TextInput } from 'react-native'
import style from '../src/style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusDia: false,
      statusTamanho: false,
      frase: 'Digite algo aqui e guarde essa frase.'
    }
  }

  render() {
    return(
      <View style={style.phoneScreen}>
        <Text style={style.title}>Aplicativo Frases</Text>
        <View style={style.boxButtons}>
          <Text>
            { this.state.statusDia ? 'Noite' : 'Dia' }
          </Text>
          <Switch 
            value={ this.state.statusDia }
            onValueChange= { vlDia => this.setState({ statusDia: vlDia }) } />
          
          <Text>
            { this.state.statusTamanho ? 'Grande' : 'Pequeno' }
          </Text>
          <Switch 
            value={ this.state.statusTamanho }
            onValueChange= { vlSize => this.setState({ statusTamanho: vlSize }) } />
        </View>
        <ScrollView style={style.boxTexto}>
          <TextInput
            style={style.txt}
            multiline={true}
            placeholder={ this.state.frase }
          />
        </ScrollView>
      </View>
    )
  }
}