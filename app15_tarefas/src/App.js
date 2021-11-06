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
import ConfigDB_Tarefas from './Classes/ConfigDB_Tarefas'
import style from '../src/style'

const renderTarefa = ({ item }) => {
  return(
    <View style={style.tarefa}>
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
    this.bd = new ConfigDB_Tarefas()
    this.bd.getTarefas()
    this.state = { 
      tarefaAserCriada: ''
    }
    this.defTaskBefSendToDB = this.defTaskBefSendToDB.bind(this)
    this.sendNewTaskOnBD = this.sendNewTaskOnBD.bind(this)
  }

  defTaskBefSendToDB(txtTyped) {
    this.setState({ tarefaAserCriada: txtTyped })
  }

  sendNewTaskOnBD() {
    this.bd.addNewTarefa(
      this.state.tarefaAserCriada
    )
  }

  render() {
    return(
      <View style={style.phoneScreen}>
      <Text style={style.title}>Aplicativo Tarefas</Text>
      <View style={style.boxBtnInput}>
        <TextInput 
          style={style.input}
          placeholder=' Digite o nome da tarefa'
          value={ this.state.tarefaAserCriada }
          onChangeText={ this.defTaskBefSendToDB } 
        />
        <Pressable 
          onPress= { this.sendNewTaskOnBD }
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
        data={ this.bd.getTarefas() }
        renderItem={ renderTarefa }
        key={ task => task.id }
      /> */}

    </View>
    )
  }
}