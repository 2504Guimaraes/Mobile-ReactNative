import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import axios from 'axios'
import meuCEP from '../src/meuCep'
import style from '../src/style'

import CepUsuario from '../src/Components/CepUsuario/CepUsuario'
import LoadingComp from '../src/Components/LoadingComp/LoadingComp'

const api = axios.create({
  baseURL: `https://tarefa-backend.herokuapp.com/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await api.get('/tasks')
    this.setState({
      tarefas: response.data,
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
        <FlatList 
          data={ this.state.tarefas }
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({ item }) => <CepUsuario data={ item } /> }
        />
      )
    }
  }
}