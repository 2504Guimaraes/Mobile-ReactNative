import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Pessoal from './Components/Pessoal/index'
import Formacao from './Components/Formacao/index'
import Experiencia from './Components/Experiencia/index'

const infoHeaderTelas = (
  funcGerarIcone,
  a = null ,
  b = null ,
  c = null ,
  d = false
) => {
  return {
    tabBarIcon: funcGerarIcone,
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

const criarIcone = (nome, cor, tamanho) => {
  return (
    <FontAwesome name={`${nome}`} color={`${cor}`} size={tamanho} />
  )
}

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Pessoal" 
          component={ Pessoal }
          options={ 
            infoHeaderTelas(
              () => criarIcone('user-circle', '#434343', 30), 
              "Pessoal", 
              null, 
              null, 
              false
            )
          } 
        />
        <Tab.Screen 
          name="Formação" 
          component={ Formacao }
          options={ 
            infoHeaderTelas(
              () => criarIcone('graduation-cap', '#434343', 30), 
              "Formação", 
              null, 
              null, 
              false
            )
          } 
        />
        <Tab.Screen 
          name="Experiência" 
          component={ Experiencia }
          options={
            infoHeaderTelas(
              () => criarIcone('address-card', '#434343', 30), 
              "Experiência", 
              null, 
              null, 
              false
            )
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}