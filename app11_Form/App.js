import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'

const Stack = createStackNavigator()

const Home = () => {
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

const About = () => {
  return(
    <View>
      <Text>About</Text>
    </View>
  )
}

const Contact = () => {
  return(
    <View>
      <Text>Contact</Text>
    </View>
  )
}

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="About" component={ About } />
        <Stack.Screen name="Contact" component={ Contact } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}