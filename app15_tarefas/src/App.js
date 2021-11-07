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
import criarTabelasDB, { 
  getTarefas, 
  addNewTarefa,
  deleteTarefa 
} from '../src/Functions/ConfigDB_Tarefas'
import style from '../src/style'


const renderTarefa = (task, bancoClasse, objClasse) => {
  return(
    <View key={ task.id } style={style.tarefa}>
      <Text style={style.txtTarefa}>{ task.id } - { task.nome }</Text>
      <Pressable style={style.btnApagar}
        onPress={ () => { 
          deleteTarefa(bancoClasse, objClasse, task.id) 
        }}
      >
        <Text style={style.txtBtnApagar}>Apagar</Text>
      </Pressable>
    </View>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.db = openDatabase({ name: 'bd_app_15' })
    criarTabelasDB(this.db)
    this.state = { 
      tarefasComp: [],
      tarefaDigitada: ''
    }
    this.pegarNmTarefa = this.pegarNmTarefa.bind(this)
    getTarefas(this.db, this)
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
            addNewTarefa(
              this.db, 
              this, 
              this.state.tarefaDigitada
            )
            getTarefas(this.db, this)
          }}
          style={
            ({ pressed }) => [
              pressed ? style.btn2 : style.btn
            ]}
          >
          <Text style={style.txtBtn}>+</Text>
        </Pressable>
      </View>

      <ScrollView style={style.areaTarefas}>
        {
          this.state.tarefasComp.map(tarefaDisponivel => (
            renderTarefa(tarefaDisponivel, this.db, this)
          ))
        }
      </ScrollView>

    </View>
    )
  }
}