import React, { Component } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import axios from 'axios'
import meuCEP from '../src/meuCep'
import style from '../src/style'

import CepUsuario from '../src/Components/CepUsuario/CepUsuario'

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cepDigitado: '',
      buscaIniciada: false,
      cepBuscado: '',
      loading: true,
      cepComponent: {}
    }
  }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Cep X Endereço</Text>
        <View style={style.inputBox}>
            <TextInput style={style.input}
              placeholder=' Digite o CEP'
            />
            <Pressable style={
              ({ pressed }) => [
                pressed ? style.btnAtivado : style.btnDesativado
              ]
            }>
              <Text style={style.btnTxt}>Enviar</Text>
            </Pressable>
        </View>
      </View>
    )
  }
}

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cepComponent: {},
//       loading: true
//     }
//   }

//   async componentDidMount() {
//     const response = await apiCEP.get(`/${meuCEP}/json`)
//     this.setState({
//       cepComponent: response.data,
//       loading: false
//     })
//   }

//   render() {
//     if(this.state.loading) {
//       return(
//         <View style={style.screen}>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     else {
//       return(
//         <View style={style.screen}>
//           <CepUsuario 
//             data={{ 
//               cep: this.state.cepComponent.cep,
//               logradouro: this.state.cepComponent.logradouro,
//               bairro: this.state.cepComponent.bairro,
//               localidade: this.state.cepComponent.localidade,
//               uf: this.state.cepComponent.uf
//             }} 
//           />
//         </View>
//       )
//     }
//   }
// }