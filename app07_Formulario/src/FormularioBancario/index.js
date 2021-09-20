import React, { Component } from 'react'
import { Text, View, TextInput, Switch, Pressable } from 'react-native'
import style from './style'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

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
      valorLimite: 0,
      brasileiro: false
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

          <Text style={style.inputTitles}>Limite</Text>
          <Slider 
            minimumValue={50}
            maximumValue={200}
            step={1}
            minimumTrackTintColor='#336fca'
            maximumTrackTintColor='#a7a7a7'
            thumbTintColor='#285aa5'
            onValueChange={ 
              (valorSelecionado) => { 
                this.setState({ valorLimite: valorSelecionado })
              }
            }
            value={ this.state.valorLimite }
          />
          <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 20 }}>
            { this.state.valorLimite.toFixed(0) }
          </Text>
          

          <Text style={style.inputTitles}>Brasileiro</Text>
          <Switch 
            trackColor={{ false: "#a7a7a7", true: "#336fca" }}
            thumbColor={'#285aa5'}
            value={ this.state.brasileiro }
            onValueChange={ 
              (valorEscolhido) => {
                this.setState({ brasileiro: valorEscolhido }) }}
          />

          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            { (this.state.brasileiro) ? "Brasileiro" : "Estrangeiro" }
          </Text>

          <Pressable style={ ({pressed}) => [
              style.baseBtn,
              pressed ? 
                style.btnPressed : style.btn  
            ]}>
            <Text style={style.btnTxt}>
              Cadastrar
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

export default FormularioBancario