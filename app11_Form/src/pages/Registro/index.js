import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default Registro = ({ route }) => {
  const navigate = useNavigation()
  return(
    <View>
      <Text>Usuário Cadastrado</Text>
      <Text>{ route.params?.nome }</Text>      
      <Text>{ route.params?.idade }</Text>
      <Text>{ route.params?.sexoPessoa }</Text>
      <Text>{ route.params?.escolaridade }</Text>
      <Text>{ route.params?.valorLimite }</Text>
      <Text>{ route.params?.brasileiro }</Text>
      <Text>{ route.params?.nacionalidade }</Text>      
    </View>
  )
}