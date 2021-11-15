import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
ActivityIndicator, Button } from 'react-native'
import api from '../../Services/api'
import Card from '../Card'
import { useNavigation } from '@react-navigation/core'

const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  titulo:{
    fontSize: 18,
    padding: 15
  },
  descricao:{
    fontSize: 10,
    padding: 15
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "yellow",
    marginVertical: 0,
    marginLeft: 10
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "tomato",
    marginTop: 10,
    marginBottom: 10
  }
})

export default Tarefas = () => {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    await carregarTarefas()
    setLoading(false)
  },[])

  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }

  const navigation = useNavigation()

  const irFormulario = async () => {
    navigation.navigate('Formulario', {
      atualizarLista: carregarTarefas
    })
  }

  if(loading) {
    return(
      <View 
        style={{ 
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}>
          <ActivityIndicator color='#09a6ff'size={40} />
      </View>
    )
  }
  else {
    <View style={styles.container}>
      <FlatList 
        data={ tarefas }
        keyExtractor={ item => item.id.toString() }
        renderItem={ ({ item }) => { 
          <Card data={ item }  funcCarregarTarefas={ carregarTarefas() } /> 
        }}
      />
    </View>
  }
}