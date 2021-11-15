import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tarefas from './Components/Tarefas'
import Form from './Components/Form'

const Stack = createStackNavigator()

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarefas" component={ Tarefas } />
        <Stack.Screen name="Formulario" component={ Form } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
