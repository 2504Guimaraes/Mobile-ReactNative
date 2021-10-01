import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../PessoaCadastrada/style'

class PessoaCadastrada extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <View style={style.personsData}>
        <Text style={style.title}>Dados Informados</Text>
        <View style={style.pontilhado}></View>
        <Text style={style.txt}>Nome: </Text>
        <Text style={style.txt}>Sexo: </Text>
        <Text style={style.txt}>Escolaridade: </Text>
        <Text style={style.txt}>Nacionalidade: </Text>
      </View>
    )
  }
}

export default PessoaCadastrada