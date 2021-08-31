import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions 
} from 'react-native'

const estilo = StyleSheet.create({
  screen: {
    backgroundColor: 'lightblue',
    height: Dimensions.get('window').height,
    paddingLeft: 15, paddingRight: 15
  }
})

class Multiplicador extends Component {
  
  render() {
    return(
      <View>
        <Text>Multiplicador de Números</Text>
        <Text>
          Escreva um valor em cada um dos espaços 
          e aperte o botão.
        </Text>
      </View>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Multiplicador/>
    </View>
  )
}