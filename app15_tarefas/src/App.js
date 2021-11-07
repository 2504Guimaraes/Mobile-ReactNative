import React, { Component, useEffect } from 'react'
import { 
  View, 
  Text, 
  Switch, 
  ScrollView, 
  TextInput, 
  Pressable,
  FlatList
} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import style from '../src/style'

const getTarefasAntesDeClasseCarregar = (bancoClasse, objClasse) => {
  const obterListaTarefas = (res, comprimento) => {
    let listTarefasBD = []
    for (let i = 0; i < comprimento; i++) {
      let tarefaBD = res.rows.item(i)
      listTarefasBD.push({ 
        id: tarefaBD.id_tarefa, 
        nome: tarefaBD.nm_tarefa 
      })
    }
    return listTarefasBD
  }

  bancoClasse.transaction(transacaoDB => {
    transacaoDB.executeSql(
      'SELECT * FROM tb_Tarefa ORDER BY id_tarefa',
      [],
      (transacaoDB, response) => {
        console.log('Tarefas do Banco lidas ANTES DE CARREGAR com sucesso!')
        let comprimento = response.rows.length

        if (comprimento > 0) {
          const listaTarefas = obterListaTarefas(response, comprimento)
          console.log(listaTarefas)
          objClasse.setState({ tarefasComp: listaTarefas })
        }
      },
      error => {
        console.log(`Erro ao obter tarefas do Banco: "${error.message}"`)
      }
    )
  })
}

const renderTarefa = (item) => {
  return(
    <View key={ item.id } style={style.tarefa}>
      <Text style={style.txtTarefa}>{ item.id } - { item.nome }</Text>
      <Pressable style={style.btnApagar}>
        <Text style={style.txtBtnApagar}>Apagar</Text>
      </Pressable>
    </View>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.db = openDatabase({ name: 'bd_app_15' })
    this.db.transaction(transacaoDB => {
      transacaoDB.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_Tarefa (
          id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT,
          nm_tarefa VARCHAR(25)
        )`,
        [],
        (transacaoDB, response) => {
          console.log('Tabela Tarefas Criada com sucesso!')
        },
        error => {
          console.log(`Erro ao criar tabela: ${error.message}`)
        }
      )
    })
    this.state = { 
      tarefasComp: [],
      tarefaDigitada: ''
    }
    this.pegarNmTarefa = this.pegarNmTarefa.bind(this)
    getTarefasAntesDeClasseCarregar(this.db, this)
  }

  addNewTarefa() {
    const newTarefa = this.state.tarefaDigitada
    if (!newTarefa) {
      alert("Informe alguma tarefa p/ adicionar uma nova no BD!")
      return false 
    }
    this.db.executeSql(
      'INSERT INTO tb_Tarefa (nm_tarefa) VALUES (?)',
      [newTarefa],
      (transacaoDB, response) => {
        console.log(`Tarefa: "${newTarefa}" adicionada com sucesso!`)
        this.getTarefas()
      },
      error => {
        console.log(`Erro ao criar tarefa: "${error.message}"`)
      }
    )
  }

  getTarefasDpsDeClasseCarregar() {
    const obterListaTarefas = (res, comprimento) => {
      let listTarefasBD = []
      for (let i = 0; i < comprimento; i++) {
        let tarefaBD = res.rows.item(i)
        listTarefasBD.push({ 
          id: tarefaBD.id_tarefa, 
          nome: tarefaBD.nm_tarefa 
        })
      }
      return listTarefasBD
    }

    this.db.transaction(transacaoDB => {
      transacaoDB.executeSql(
        'SELECT * FROM tb_Tarefa ORDER BY id_tarefa',
        [],
        (transacaoDB, response) => {
          console.log('Tarefas do Banco lidas com sucesso!')
          let comprimento = response.rows.length

          if (comprimento > 0) {
            const listaTarefas = obterListaTarefas(response, comprimento)
            console.log(listaTarefas)
            this.setState({ tarefasComp: listaTarefas })
          }
        },
        error => {
          console.log(`Erro ao obter tarefas do Banco: "${error.message}"`)
        }
      )
    })
  }

  pegarNmTarefa(nm) {
    this.setState({ tarefaDigitada: nm })
  }

  render() {
    return(
      <View style={style.phoneScreen}>
      <Text style={style.title}>Aplicativo Tarefas</Text>
      <View style={style.boxBtnInput}>
        <TextInput 
          onChangeText={ this.pegarNmTarefa }
          style={style.input}
          placeholder=' Digite o nome da tarefa' 
        />
        <Pressable 
          onPress= { () => {
            this.addNewTarefa()
            this.getTarefasDpsDeClasseCarregar()
          }}
          style={
            ({ pressed }) => [
              pressed ? style.btn2 : style.btn
            ]}
          >
          <Text style={style.txtBtn}>+</Text>
        </Pressable>
      </View>

      {/* <FlatList 
        style={style.areaTarefas}
        nestedScrollEnabled
        data={ null }
        renderItem={ null }
        key={ task => task.id }
      /> */}

      <ScrollView style={style.areaTarefas}>
        {
          this.state.tarefasComp.map(tarefaDisponivel => (
            renderTarefa(tarefaDisponivel)
          ))
        }
        <Text>{ this.state.tarefaDigitada }</Text>
      </ScrollView>

    </View>
    )
  }
}