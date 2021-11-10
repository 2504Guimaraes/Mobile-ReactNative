import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}