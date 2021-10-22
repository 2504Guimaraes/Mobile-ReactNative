import React, { Component } from 'react'
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Keyboard
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      nome: ''
    }
    this.gravaNome = this.gravaNome.bind(this)
  }

  // Todas vez que o nome armazenado muda, o armazenamento local
  // guarda esse mesmo nome dentro dele, o associando a chave "_nome".
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome
    if (prevState != nome)
      await AsyncStorage.setItem('_nome', nome)
  }
  
  // Toda vez que o App é aberto, o armazenamento local busca
  // o valor guardado dentro de _nome e o põe no estado atual
  // da aplicação, para mostrá-lo em tela automaticamente :D
  async componentDidMount() {
    await AsyncStorage.getItem('_nome')
      .then((value) => {
        this.setState({ nome: value })
      })
  }

  gravaNome() {
    this.setState({ nome: this.state.input })
    alert('Salvo com sucesso!')
    Keyboard.dismiss()
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput 
            style={styles.input}
            value={this.state.input}
            onChangeText={ (txtDigitado) => this.setState({ input: txtDigitado }) }
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={ this.gravaNome }>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>{ this.state.nome }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 300,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
    botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
})