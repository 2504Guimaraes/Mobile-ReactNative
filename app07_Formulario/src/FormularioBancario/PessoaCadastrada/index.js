import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './style'

class PessoaCadastrada extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nm: null,
      idade: null,
      sexo: null,
      escolari: null,
      limite: null,
      nacionalidade: null
    }
  }

  render() {
    return(
      <View style={style.personsData}>
        <Text style={style.title}>Dados Informados</Text>
        <View style={style.pontilhado}></View>
        <Text style={style.txt}>Nome: { this.state.nm }</Text>
        <Text style={style.text}>Idade: { this.state.idade }</Text>
        <Text style={style.txt}>Sexo: { this.state.sexo }</Text>
        <Text style={style.txt}>Escolaridade: { this.state.escolari }</Text>
        <Text style={style.txt}>Limite: { this.state.limite }</Text>
        <Text style={style.txt}>Nacionalidade: { this.state.nacionalidade }</Text>
      </View>
    )
  }
}

export default PessoaCadastrada