import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CepUsuario extends Component {
  render() {
    const { title, description } =  this.props.data
    return(
      <View 
        style={{  
          borderColor: '#000',
          borderWidth: 1,
          marginLeft: 15, marginRight: 15,
          marginTop: 15,
          padding: 10 
        }}
      >
        <Text>{ title }</Text>
        <Text>{ description }</Text>
      </View>
    )
  }
}