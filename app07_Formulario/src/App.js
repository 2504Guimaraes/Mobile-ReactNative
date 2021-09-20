import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ScrollView, 
  StyleSheet,
  Dimensions
} from 'react-native'

import FormularioBancario from './FormularioBancario'

const style = StyleSheet.create({
  screen: {
    backgroundColor: '#eaeaea',
    height: Dimensions.get('window').height
  },
  titleBox: {
    backgroundColor: '#215897',
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20
  },
  yellowLine: {
    height: 5,
    backgroundColor: '#f4e96e'
  },
  title: {
    color: 'white', fontSize: 18,
    textAlign: 'center'
  }
})

export default App = () => {
  return(
    <ScrollView style={style.screen}>

        <View style={style.titleBox}>
          <Text style={style.title}>Abertura de Conta</Text>
        </View>
        <View style={style.yellowLine}></View>

        <FormularioBancario />

    </ScrollView>
  )
}