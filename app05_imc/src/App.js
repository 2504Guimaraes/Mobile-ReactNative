import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TextInput, 
  Pressable
} from 'react-native'

const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  },
  btn: {
    backgroundColor: 'lightblue',
    marginTop: 15,
    padding: 15,
    alignItems: 'center'
  },
  btnPressed: {
    backgroundColor: 'pink',
    marginTop: 15,
    padding: 15,
    alignItems: 'center'
  }
})

class Teste extends Component {
  constructor(props) {
    super(props)
    
    this.state = { pressionado: 'Não :(' }

    this.pressionar = this.pressionar.bind(this)
  }

  pressionar() {
    this.state.pressionado === 'Não :(' ?
      this.setState({ pressionado: 'Sim" :P' }) :
      this.setState({ pressionado: 'Não :(' })
  }

  render() {
    return(
      <View>
          <Pressable
            style={ ({pressed}) => [
              pressed ? estilo.btn : estilo.btnPressed   
            ]}
            onPress={ this.pressionar }
          >
          <Text>Clique aqui!</Text>
        </Pressable>
        <Text>
          { this.state.pressionado }
        </Text>
      </View>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Teste/>
    </View>
  )
}