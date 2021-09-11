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
  }
})

export default App = () => {
  return(
    <View style={style.screen}>
      <ScrollView>
        <FormularioBancario />
      </ScrollView>
    </View>
  )
}