import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import style from '../../style'

export default class Filme extends Component {
  render() {
    const { nome, foto, sinopse } = this.props.data
    return(
      <View style={style.filme}>
        <View style={style.boxTitleFilme}>  
          <Text style={style.titleFilme}>{ nome }</Text>
          <Text style={style.lerMais}>Leia mais</Text>
        </View>
        <Image style={style.filmeImg} 
          source={{ uri: `${foto}` }} />
      </View>
    )
  }
}