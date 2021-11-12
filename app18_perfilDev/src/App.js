import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, Image } from 'react-native'
import style from './style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.sate = {}
  }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Perfil dos Devs</Text>
        
        <View style={style.boxImg}>
          <Image style={style.githubImg}
            source={{ 
              uri: 'https://avatars.githubusercontent.com/u/44307177?v=4' }}
          />
        </View>

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

        <View style={style.profileShowed}>
          <Text style={style.txtProfile}>Id: - </Text>
          <Text style={style.txtProfile}>Nome: - </Text>
          <Text style={style.txtProfile}>Repositórios: - </Text>
          <Text style={style.txtProfile}>Criado em: - </Text>
          <Text style={style.txtProfile}>Seguidores: - </Text>
          <Text style={style.txtProfile}>Seguindo: - </Text>
        </View>
        {/* <View>{ this.renderPerfil() }</View> */}
      </View>
    )
  }
}