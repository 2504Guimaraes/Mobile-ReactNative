import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import style from './style'

/* 
  NOTA: Para selecionar 
  multiplas linhas é só segurar o Alt,
  tinha esquecido disso. 
*/

class FormularioBancario extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>

        <View style={style.titleBox}>
          <Text style={style.title}>
            Abertura de Conta
          </Text>
        </View>

        <View style={style.yellowLine}></View>
        
        <View style={style.form}>
          <Text style={style.inputTitles}>Nome</Text>
          <TextInput
            placeholder=" Digite seu nome"
            style={style.inputs}
          />

          <Text style={style.inputTitles}>Idade</Text>
          <TextInput
            placeholder=" Digite sua idade"
            style={style.inputs}
          />

          <Text style={style.inputTitles}>Sexo</Text>
          <Text style={style.inputTitles}>Escolaridade</Text>
          <Text style={style.inputTitles}>Limite</Text>
          <Text style={style.inputTitles}>Brasileiro</Text>
        </View>

      </View>
    )
  }
}

export default FormularioBancario