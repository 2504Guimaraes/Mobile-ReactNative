import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import style from '../src/style'

const apiMoedas = axios.create({
  baseURL: `https://economia.awesomeapi.com.br/json/last/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valorDigitado: '',
      moedaEscolhida1: 1,
      moedaEscolhida2: 1,
      stringBusca: '',
      objBusca: '',
      vlConverdidoComponent: null
    }
    this.pegarValor = this.pegarValor.bind(this)
  }

  async componentDidUpdate() {
    const showMsg = (txt) => {
      console.log('--------------------------------------------------')
      console.log(`${txt}`)
      console.log('--------------------------------------------------')
    }
    if (this.state.valorDigitado == null) 
      return null 
    else {
      try {
        const valoresIguais = () => {
          this.setState({ vlConverdidoComponent: this.state.valorDigitado })
        }
        const definirBusca = (txtBusca) => {
          this.setState({ stringBusca: txtBusca })
        }
        const definirObjBusca = (txtObj) => {
          this.setState({ objBusca: txtObj })
        }
        const alertaUsuario = (moeda) => {
          alert(`Conversão ${moeda} para Bitcoin indisponível na API, mas o contrário existe.`)
        }
        const moeda1 = this.state.moedaEscolhida1
        const moeda2 = this.state.moedaEscolhida2

        if (moeda1 == 1 && moeda2 == 1)
          valoresIguais()
        else if (moeda1 == 1 && moeda2 == 2) {
          definirBusca('BRL-USD')
          definirObjBusca('BRLUSD')
        }
        else if (moeda1 == 1 && moeda2 == 3) {
          definirBusca('BRL-EUR')
          definirObjBusca('BRLEUR') 
        }
        else if (moeda1 == 1 && moeda2 == 4)
          alertaUsuario('Real')
        
        else if (moeda1 == 2 && moeda2 == 1) {
          definirBusca('USD-BRL')
          definirObjBusca('USDBRL') 
        }
        else if (moeda1 == 2 && moeda2 == 2)
          valoresIguais()

        else if (moeda1 == 2 && moeda2 == 3) {
          definirBusca('USD-EUR')
          definirObjBusca('USDEUR') 
        }
        else if (moeda1 == 2 && moeda2 == 4) {
          alertaUsuario('Dólar') 
        }
        else if (moeda1 == 3 && moeda2 == 1) {
          definirBusca('EUR-BRL')
          definirObjBusca('EURBRL') 
        }
        else if (moeda1 == 3 && moeda2 == 2) {
          definirBusca('EUR-USD')
          definirObjBusca('EURUSD') 
        }
        else if (moeda1 == 3 && moeda2 == 3)
          valoresIguais()
        else if (moeda1 == 3 && moeda2 == 4)
          alertaUsuario('Euro')
        
        else if (moeda1 == 4 && moeda2 == 1) {
          definirBusca('BTC-BRL')
          definirObjBusca('BTCBRL')
        }
        else if (moeda1 == 4 && moeda2 == 2) {
          definirBusca('BTC-USD')
          definirObjBusca('BTCUSD')
        }
        else if (moeda1 == 4 && moeda2 == 3) {
          definirBusca('BTC-EUR')
          definirObjBusca('BTCEUR')
        }
        else if (moeda1 == 4 && moeda2 == 4)
          valoresIguais()

        const response = await apiMoedas.get(`/${this.state.stringBusca}`)
        const objEscolhido = this.state.objBusca
        
        if(objEscolhido == 'BRLUSD') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if(objEscolhido == 'BRLEUR') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'USDBRL') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'USDEUR') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'EURBRL') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'EURUSD'){
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'BTCBRL') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'BTCUSD') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
        else if (objEscolhido == 'BTCEUR') {
          this.setState({ 
            vlConverdidoComponent: (
              response.data.BRLUSD.low * Number(this.state.valorDigitado)
            ) 
          })
        }
      } 
      catch(e) {
        showMsg(e.message)
      }
    }
  }

  pegarValor(txt) { this.setState({ valorDigitado: txt }) }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Conversor de Moedas</Text>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>Valor:</Text>
            <TextInput
              keyboardType='numeric'
              value={ this.state.valorDigitado }
              onChangeText={ this.pegarValor }
              style={style.txtInput} 
              placeholder=" Digite um valor "/>
        </View>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>De: </Text>
            <Picker
              selectedValue={ this.state.moedaEscolhida1 }
              onValueChange={
                (valor, index) => this.setState({ 
                    moedaEscolhida1: valor
                 })
              }
            >
              <Picker.Item key={1} value={1} label="Real" />
              <Picker.Item key={2} value={2} label="Dolar" />
              <Picker.Item key={3} value={3} label="Euro" />
              <Picker.Item key={4} value={4} label="Bitcoin" />
            </Picker>
        </View>
        <View style={style.inputBox}>
            <Text style={style.txtTitleInput}>Para: </Text>
            <Picker
              selectedValue={ this.state.moedaEscolhida2 }
              onValueChange={
                (valor, index) => this.setState({ 
                    moedaEscolhida2: valor
                 })
              }
            >
              <Picker.Item key={1} value={1} label="Real" />
              <Picker.Item key={2} value={2} label="Dolar" />
              <Picker.Item key={3} value={3} label="Euro" />
              <Picker.Item key={4} value={4} label="Bitcoin" />
            </Picker>
        </View>
        <Text style={style.titleValue}>Valor convertido</Text>
        <View style={style.boxValue}> 
          <Text style={style.txtValue}> 
            { this.state.vlConverdidoComponent } 
          </Text> 
        </View>
      </View>
    )
  }
}