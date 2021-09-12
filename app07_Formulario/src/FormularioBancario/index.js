import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import style from './style'
import { Picker } from '@react-native-picker/picker'

/* 
  NOTA: Para selecionar 
  multiplas linhas é só segurar o Alt,
  tinha esquecido disso. 
*/

class FormularioBancario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sexoPessoa: null,
      escolaridade: null,
    }
  }

  render() {
    return(
      <View>
    
        <View style={style.form}>
          <Text style={style.inputTitles}>Nome</Text>
          <TextInput
            placeholder=" Digite seu nome"
            style={style.inputs}
          />


          <Text style={style.inputTitles}>Idade</Text>
          <TextInput
            placeholder=" Digite sua idade"
            style={style.inputs}
          />


          <Text style={style.inputTitles}>Sexo</Text>
          <Picker 
            selectedValue={this.state.sexoPessoa}
            onValueChange={ (itemValue, itemIndex) => { 
              this.setState({ sexoPessoa: itemValue })
             }}>
            <Picker.Item key={1} value={1} label="Masculino"/>
            <Picker.Item key={2} value={2} label="Feminino"/>
            <Picker.Item key={3} value={3} label="Outro"/>
          </Picker>


          <Text style={style.inputTitles}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => {
              this.setState({ escolaridade: itemValue })
            }}>
            <Picker.Item key={1} value={1} label="Ensino fundamental incompleto"/>
            <Picker.Item key={2} value={2} label="Ensino fundamental completo"/>
            <Picker.Item key={3} value={3} label="Ensino médio incompleto"/>
            <Picker.Item key={4} value={4} label="Ensino médio completo"/>
            <Picker.Item key={5} value={5} label="Ensino superior incompleto"/>
            <Picker.Item key={6} value={6} label="Ensino superior completo"/>
          </Picker>

          {/* <Text style={style.inputTitles}>Limite</Text>
          <Text style={style.inputTitles}>Brasileiro</Text> */}

        </View>

      </View>
    )
  }
}

export default FormularioBancario