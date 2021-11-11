import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import meuCEP from './meuCep'
import style from './style'

import CepUsuario from './Components/CepUsuario/CepUsuario'

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cepCarregado: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await apiCEP.get(`/${meuCEP}/json/`)
    this.setState({
      cepCarregado: response.data,
      loading: false
    })
  }

  render() {
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}