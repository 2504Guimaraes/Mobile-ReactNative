import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.sate = {}
  }

  render() {
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}