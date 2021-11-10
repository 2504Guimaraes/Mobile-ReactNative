import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    backgroundColor: 'red',
    paddingLeft: 15,
    paddingRight: 15
  }
})

export default style