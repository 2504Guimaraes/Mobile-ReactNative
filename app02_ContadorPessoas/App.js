import React, { Component } from 'react'
import { View, Text, Image, Dimensions, Button, StyleSheet, TextInput } from 'react-native'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { nome: "Seu nome digitado" }
    this.nomeDefault = this.mudarNome.bind(this)
  }

  mudarNome(nomeDigitado) {
    if (nomeDigitado.length > 0) {
      this.setState({ nome: nomeDigitado })
    }
    else {
      this.setState({ nome: "Digite algo!" })
    }
  }

  render() {
    return(
      <View style={ styles.area }>
        <TextInput placeholder="  Digite seu nome"
          style={ styles.inputStyle }
          onChangeText={ this.mudarNome }
        />
        <Button title="Mostrar nome" /* Botões em react-native não aceitam style */
          onPress={ () => {
            this.mudarNome("...") 
          }} 
        />
        <Text style={ styles.txtNome }>
          { this.state.nome }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    marginBottom: 15,
    height: 40,
    borderRadius: 2,
    borderColor: '#d4d4d4'
  },
  area: {
    height: Dimensions.get("window").height,
    backgroundColor: '#f2f2f2',
    padding: 15
  },
  btn: {
    padding: 10,
    backgroundColor: 'red'
  },
  txtNome: {
    fontSize: 16,  
    textAlign: 'center', 
    marginTop: 15,
    borderWidth: 2,
    padding: 10,
    borderStyle: 'dotted',
    borderRadius: 5
  }
})

/*

-----------------------------------------------------------

Código da aula do dia 28/08/2021 antes do teste com STATES:

----------------------------------------------------------- 

class App extends Component {
  render() {
    let screenHeight = Dimensions.get("window").height
    let frase = "Go ahead mr.Joestar!!!"
    return (
      <View style={{ backgroundColor: "#f1f1f1", height: screenHeight, padding: 15 }}>
        <Text>Olá turma novamente!</Text>
        <Text>Meu segundo App</Text>
        <Text style={{ color: "#ff0000", fontSize: 25 }}>
          React Native
        </Text>
        <JosephJoestar 
          largura={200} 
          altura={200}
          nome={'Joseph Joestar - Parte 3'} 
        />
        <Text style={{ fontSize: 25, marginTop: 15 }}>{frase}</Text>
      </View>
    )
  }
}

class JosephJoestar extends Component {
  render() {
    let img = "https://i.pinimg.com/originals/6d/f1/e0/6df1e02c8232e44a3001e14659633896.png"
    return (
      <View>
        <Image
          source={{uri: img }}
          style={{ width: this.props.largura , height: this.props.altura }} 
        />
        <Text>{ this.props.nome }</Text>
      </View>
    )
  }
}

*/

export default App