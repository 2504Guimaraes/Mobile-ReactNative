import { Dimensions, StyleSheet } from "react-native"

const largura = 150
const altura = 4 * largura / 3

const styles = StyleSheet.create({
  screen:{
    backgroundColor: '#f5f5f5',
    minHeight: Dimensions.get('window').height,
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  preview:{
    top: 15,
    alignSelf: 'center',
    height: altura, 
    width: largura,
    alignItems: 'center'
  },
  // boxBtnsLinkedToCamera: {
  //   marginBottom: 35, 
  //   flexDirection: 'row', 
  //   alignItems: 'flex-end', 
  //   justifyContent: 'space-between' 
  // },
  boxBtnsLinkedToCamera: {
    paddingTop: 30, // Servindo como substitu. de marginTop ...
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 15
  },
  btnTakePic: {
    backgroundColor: 'pink',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    marginRight: 7,
    borderRadius: 3,
    backgroundColor: '#434343'
  },
  btnOpenAlbum: {
    backgroundColor: 'purple',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    borderRadius: 3,
    backgroundColor: '#434343'
  },
  txtBtnCamera: { 
    color: '#fff', 
    fontSize: 16 
  },
  capture:{
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

export default styles