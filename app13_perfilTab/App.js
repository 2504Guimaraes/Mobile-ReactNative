import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function TesteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const criarIcone = (nome, cor, tamanho) => {
  return (
    <FontAwesome name={`${nome}`} color={`${cor}`} size={tamanho} />
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={ HomeScreen }
          options={{
            tabBarIcon: () => (criarIcone('user-circle', '#434343', 30))
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={ SettingsScreen }
          options={{
            tabBarIcon: () => (criarIcone('graduation-cap', '#434343', 30))  
          }}
        />
        <Tab.Screen 
          name="Teste" 
          component={ TesteScreen }
          options={{
            tabBarIcon: () => (criarIcone('address-card', '#434343', 30))  
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}