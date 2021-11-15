import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
ActivityIndicator, Button, Dimensions, Pressable } from 'react-native'
import api from '../../Services/api'
import Card from '../Card'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'


export default Tarefas = () => {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)

  const buscarDados = async () => {
    await carregarTarefas()
    setLoading(false)
  }

  useEffect(() => {
    buscarDados()
  }, [])

  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }

  const navigation = useNavigation()

  async function irFormulario() {
    navigation.navigate('Formulario', {
      atualizarLista: carregarTarefas
    })
  }

  if(loading){
    return(
      <View 
        style={{
          alignItems: 'center', 
          justifyContent: 'center',
          flex:1
        }} >
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    )
  }
  else{
    return(
      <View style={styles.screen}>
        <Text style={styles.titulo}>
          App Cadastro Tarefas
        </Text>
        <Pressable
          onPress={ irFormulario } 
          style={({ pressed }) => [
            pressed ? styles.btnCriarAtivado : styles.btnCriar
          ]}>
            <Text style={styles.txtBtn}>Criar nova Tarefa</Text>
        </Pressable>
        <FlatList
          style={styles.boxTasks}
          scrollEnabled
          data={ tarefas }
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={ carregarTarefas } /> }
        />
      </View>
    )
  }
}