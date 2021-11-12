import React, { Component } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import style from './style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.sate = {}
  }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Cep X Endereço</Text>
        <View style={style.inputBox}>
            <TextInput style={style.input}
              // value={ this.state.usuarioDigitado }
              placeholder=' Nome de perfil github'
              onChangeText={ this.pegarCep }
            />
            <Pressable 
              // onPress={ this.buscarPerfil }
              style={
                ({ pressed }) => [
                  pressed ? style.btnAtivado : style.btnDesativado
              ]}
            >
              <Text style={style.btnTxt}>Buscar</Text>
            </Pressable>
        </View>

        {/* <View>{ this.renderPerfil() }</View> */}
      </View>
    )
  }
}