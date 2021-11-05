import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Switch, 
  ScrollView, 
  TextInput, 
  Pressable
} from 'react-native'
import style from '../src/style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return(
      <View style={style.phoneScreen}>
      <Text style={style.title}>Aplicativo Tarefas</Text>
      <View style={style.boxBtnInput}>
        <TextInput 
          style={style.input}
          placeholder=' Digite o nome da tarefa' 
        />
        <Pressable style={
          ({ pressed }) => [
            pressed ? style.btn2 : style.btn
          ]
        }>
          <Text style={style.txtBtn}>+</Text>
        </Pressable>
      </View>
      <ScrollView style={style.areaTarefas}>

        <View style={style.tarefa}>
          <Text style={style.txtTarefa}>01 - Tarefa boa tamanho max</Text>
          <Pressable style={style.btnApagar}>
            <Text style={style.txtBtnApagar}>Apagar</Text>
          </Pressable>
        </View>

      </ScrollView>
    </View>
    )
  }
}