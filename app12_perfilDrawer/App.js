import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Feed = () => {
  return(
    <View>
      <Text>oie</Text>
    </View>
  )
}

const Article = () => {
  return(
    <View>
      <Text>tchau</Text>
    </View>
  )
}

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={ Feed } />
        <Drawer.Screen name="Article" component={ Article } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}