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
      nome: null,
      idade: null,
      sexoPessoa: null,
      escolaridade: null,
      valorLimite: 0,
      brasileiro: false,
      nacionalidade: null
    }

    this.pegaNome = this.pegaNome.bind(this)
    this.pegaIdade = this.pegaIdade.bind(this)
    this.pegaSexo = this.pegaSexo.bind(this)
    this.pegaEscolaridade = this.pegaEscolaridade.bind(this)
    this.pegaLimite = this.pegaLimite.bind(this)
    this.pegaNacionalidade = this.pegaNacionalidade.bind(this)
    // this.mostrarDados = this.mostrarDados.bind(this)
  }

  pegaNome(valorDigitado) { this.setState({ nome:  valorDigitado}) }
  pegaIdade(valorDigitado) { this.setState({ idade:  valorDigitado}) }
  pegaSexo(valorDigitado) { this.setState({ sexoPessoa:  valorDigitado}) }
  pegaEscolaridade(valorDigitado) { this.setState({ escolaridade:  valorDigitado}) }
  pegaLimite(valorDigitado) { this.setState({ valorLimite:  valorDigitado}) }
  pegaNacionalidade(valorDigitado) { this.setState({ brasileiro:  valorDigitado}) }

  // mostrarDados() {

  // }

  render() {
    return(
      <View>
        <View style={style.form}>
          <Text style={style.inputTitles}>Nome</Text>
          <TextInput
            onChangeText={ this.pegaNome }
            placeholder=" Digite seu nome"
            style={style.inputs}
          />


          <Text style={style.inputTitles}>Idade</Text>
          <TextInput
            onChangeText={ this.pegaIdade }
            placeholder=" Digite sua idade"
            style={style.inputs}
          />


          <Text style={style.inputTitles}>Sexo</Text>
          <Picker 
            selectedValue={this.state.sexoPessoa}
            onValueChange={ (itemValue, itemIndex) => { 
              this.setState({ sexoPessoa: itemValue })
             }}>
            <Picker.Item key={1} value={"Masculino"} label="Masculino"/>
            <Picker.Item key={2} value={"Feminino"} label="Feminino"/>
            <Picker.Item key={3} value={"Outro"} label="Outro"/>
          </Picker>


          <Text style={style.inputTitles}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => {
              this.setState({ escolaridade: itemValue })
            }}>
            <Picker.Item key={1} value={"Ensino fundamental incompleto"} label="Ensino fundamental incompleto"/>
            <Picker.Item key={2} value={"Ensino fundamental completo"} label="Ensino fundamental completo"/>
            <Picker.Item key={3} value={"Ensino médio incompleto"} label="Ensino médio incompleto"/>
            <Picker.Item key={4} value={"Ensino médio completo"} label="Ensino médio completo"/>
            <Picker.Item key={5} value={"Ensino superior incompleto"} label="Ensino superior incompleto"/>
            <Picker.Item key={6} value={"Ensino superior completo"} label="Ensino superior completo"/>
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
              (valorSelecionado) => {
                this.setState({ brasileiro: valorSelecionado })
              }
            }
          />

          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            { (this.state.brasileiro) ? "Brasileiro" : "Estrangeiro" }
          </Text>

          <Pressable 
              onPress={ this.mostrarDados }
              style={ ({pressed}) => [
                style.baseBtn,
                pressed ? style.btnPressed : style.btn  
            ]}>
            <Text style={style.btnTxt}>
              Cadastrar
            </Text>
          </Pressable>

          {/* <Text>
            { this.state.nome }
            - { this.state.idade }
            - { this.state.sexoPessoa }
            - { this.state.escolaridade }
            - { this.state.valorLimite }
            - { this.state.brasileiro ? "Brasileiro" : "Estrangeiro" }
          </Text> */}
        </View>
      </View>
    )
  }
}

export default FormularioBancario