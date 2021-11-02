import React, { Component, useState } from 'react'
import {
  View, 
  Text, 
  StatusBar, 
  TextInput,
  Button,
  FlatList
} from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
  name: 'rn_sqlite',
})

export default App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas,setTarefas] = useState([])

  const createTables = () => {
    db.transaction(transacaoBD => {
      transacaoBD.executeSql(`
        CREATE TABLE IF NOT EXISTS tb_tarefas (
          id INTERGER PRIMARY KEY AUTOINCREMENT,
          nome VARCHAR(35)
        )`, 
        [],
        (transacaoBD, response) => {
          console.log('Nova tabela criada com sucesso!')
        },
        error => {
          console.log(`Erro ao criar Tabela p/ nova tarefa: ${error.message}`)
        })
    })
  }

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa primeiro.")
      return false
    }

    db.transaction(transacaoBD => {
      transacaoBD.executeSql(
        `INSERT INTO tb_tarefas (nome) VALUES (?)`,
        [tarefa],
        (transacaoBD, response) => {
          console.log(`${tarefa} adicionada à tb_tarefas!`)
          getTarefas()
          setTarefa('')
        },
        error => {
          console.log(`Erro ao inserir nova tarefa: ${error.message}`)
        })
    })
  }

  const getTarefas = () => {
    db.transaction(transacaoBD => {
      transacaoBD.executeSql(
        `SELECT * FROM tb_tarefas ORDER BY id DESC`,
        [], 
        (transacaoBD, response) => {
          
          console.log('Tarefas lidas com sucesso!')      
          let comprimento = response.rows.length
          if (comprimento > 0) {
            let results = []
            for (let i = 0; i < comprimento; i++) {
              let itemTabela = response.rows.item(i)
              results.push({ 
                id: itemTabela.id,
                nome: itemTabela.nome
              })
            } setTarefas(results)
          }

        }, 
        error => {
          console.log(`Erro ao obter tarefas feitas: ${error.message}`)
        }
      )
    })
  }

  return(
    <View>
      <Text>oie</Text>
    </View>
  )
}