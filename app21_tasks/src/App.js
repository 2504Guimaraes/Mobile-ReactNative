import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tarefas from './Components/Tarefas'
import Form from './Components/Form'

const Stack = createStackNavigator()

const infoHeaderTelas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
    headerStyle: { 
      backgroundColor: `${b}`, 
      elevation: 0
    },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tarefas"  // Tarefas lidas pela API do Joseff
          component={ Tarefas } 
          options={ infoHeaderTelas(
            'Tarefas lidas pela API',
            'transparent',
            '#000',
            false
          )}
        />
        <Stack.Screen 
          name="Formulario" // Formulário de criação e edição de tarefas
          component={ Form } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
