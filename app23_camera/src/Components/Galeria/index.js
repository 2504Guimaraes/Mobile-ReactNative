import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import styles from '../../style'

export default Galeria = () => {
  return(
    <ScrollView style={styles.screen}>

      <View style={styles.usuario}>
        <View style={styles.boxImg}>
          <Image style={styles.imgUser} />
        </View>
        <View style={styles.boxInfoUser}>
          <Text style={styles.txtNm}>Ivan Guimarães</Text>
          <Text style={styles.txtArea}>Informática</Text>
        </View>
      </View>

    </ScrollView>
  )
}