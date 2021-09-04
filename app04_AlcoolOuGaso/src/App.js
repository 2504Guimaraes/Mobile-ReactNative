import React,{ Component } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Image 
} from 'react-native'


const estilo = StyleSheet.create({
  screen: {
    backgroundColor: 'lightblue',
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  }
})

class Verificador extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Text>Álccol ou Gasolina</Text>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Verificador/>
    </View>
  )
}