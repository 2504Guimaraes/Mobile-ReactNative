import React, { Component } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import axios from 'axios'
import meuCEP from '../src/meuCep'
import style from '../src/style'

import CepUsuario from '../src/Components/CepUsuario/CepUsuario'
import LoadingComp from '../src/Components/LoadingComp/LoadingComp'

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cepComponent: {},
      loading: true
    }
  }

  async componentDidMount() {
    const response = await apiCEP.get(`/${meuCEP}/json`)
    this.setState({
      cepComponent: response.data,
      loading: false
    })
  }

  render() {
    if(this.state.loading) {
      return(
        <LoadingComp />
      )
    }
    else {
      return(
        <CepUsuario 
            data={{ 
              cep: this.state.cepComponent.cep,
              logradouro: this.state.cepComponent.logradouro,
              bairro: this.state.cepComponent.bairro,
              localidade: this.state.cepComponent.localidade,
              uf: this.state.cepComponent.uf
            }} 
        />
      )
    }
  }
}