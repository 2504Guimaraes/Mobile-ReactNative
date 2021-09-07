import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions 
} from 'react-native'

const style = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  }
})

class RandomNumber extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Text>hellow world</Text>
    )
  }
}

export default App = () => {
  return(
    <View style={style.screen}>
      <RandomNumber/>
    </View>
  )
}