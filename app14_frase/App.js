import React, { Component, useState } from 'react'
import {
  View, 
  Text, 
  StatusBar, 
  TextInput,
  Button,
  FlatList
} from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
  name: 'rn_sqlite',
})