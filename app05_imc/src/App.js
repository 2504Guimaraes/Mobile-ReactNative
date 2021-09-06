import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TextInput 
} from 'react-native'

const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  }
})

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Text>oie...</Text>
    </View>
  )
}