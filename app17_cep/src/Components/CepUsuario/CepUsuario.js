import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CepUsuario extends Component {
  render() {
    const { cep, logradouro, bairro, localidade, uf } =  this.props.data
    return(
      <View>
        <Text>Cep: { cep }</Text>
        <Text>Logradouro: { logradouro }</Text>
        <Text>Bairro: { bairro }</Text>
        <Text>Localidade: { localidade }</Text>
        <Text>Estado: { uf }</Text>
      </View>
    )
  }
}