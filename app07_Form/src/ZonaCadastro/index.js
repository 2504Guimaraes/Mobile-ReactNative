import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styleZonaCadastro from './style'
import UsuarioCadastrado from './UsuarioCadastrado'

class ZonaCadastro extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <ScrollView style={styleZonaCadastro.zonaCadastro}>
        <View style={styleZonaCadastro.formulario}></View>
        <UsuarioCadastrado />
      </ScrollView>
    )
  }
}

export default ZonaCadastro