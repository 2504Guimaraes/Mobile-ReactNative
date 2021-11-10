import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import meuCEP from './meuCep'
import style from './style'

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/${meuCEP}/json/`
})

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