import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal,
  Image, PermissionsAndroid, Platform, TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll'
import * as ImagePicker from 'react-native-image-picker'
import styles from './style'

export default App = () => {
  const [open, setOpen] = useState(false)
  const [cameraComp, setCamera] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState(null)

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)

    setCapturedPhoto(data.uri)
    setOpen(true)
    console.log('FOTO TIRADA DA CAMERA:' + data.uri)

    // Chama a função salvar foto no album:
    savePicture(data.uri)
  }

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission)
      return true

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const savePicture = async (data) => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission()))
      return null

    CameraRoll.save(data, 'photo')
    .then(response => {
      console.log('SALVO COM SUCESSO: ' + response)
    })
    .catch(error => {
      console.log('ERRO AO SALVAR: ' + error)
    })
  }

  const openAlbum = () => {
    const options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album..',
      noData: true,
      mediaType: 'photo'
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel)
        console.log('Image Picker cancelado..')
      else if (response.error)
        console.log('Gerou algum erro: ' + response.error)
      else {
        setCapturedPhoto(response.assets[0].uri)
        setOpen(true)
        console.log('FOTO DA GALERIA: ' + response.assets[0].uri)
      }
    })
  }

  // Métodos inventados por mim p/ renderiação:

  const tirarFotoEAlbum = () => {
    if (RNCamera.Constants.CameraStatus === 'READY')
      return null 
    return(
      <View style={styles.boxBtnsLinkedToCamera}>
        <TouchableOpacity 
          style={styles.btnTakePic} 
          onPress={ () => takePicture(cameraComp) } >
          <Text style={styles.txtBtnCamera}>
            Tirar foto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnOpenAlbum}
          onPress={ openAlbum }
        >
          <Text style={styles.txtBtnCamera}>
            Galeria de usuários
          </Text>
        </TouchableOpacity>
      </View>
    ) 
  }

  const mostrarFotoTirada = () => {
    if (capturedPhoto !== null && capturedPhoto !== undefined) {
      return(
        <Modal
          animationType='slide' transparent={false}
          visible={open}>
          <View style={{
            flex:1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 20
          }}>
            <TouchableOpacity
              style={{margin: 10}}
              onPress={ () => setOpen(false) }
            >
              <Text style={{fontSize: 24}}>Fechar</Text>
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{width: 350, height: 450, borderRadius: 15}}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      )
    }
  }

  return(
    <View style={styles.screen}>
      <StatusBar hidden={ false }/>
      <Text style={styles.title}>Criação de Crachás</Text>
      <RNCamera
        style={styles.preview}
        type={ RNCamera.Constants.Type.front }
        ref={ rncamera => setCamera(rncamera) }
        autoFocus={ RNCamera.Constants.AutoFocus.on }
        flashMode={ RNCamera.Constants.FlashMode.auto }
        androidCameraPermissionOptions={{
          title: 'Permissao para usar a camera',
          message: 'Nós precisamos usar a sua camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar'
        }}
      />

      { tirarFotoEAlbum() }

      { mostrarFotoTirada() }

      <TextInput 
        style={styles.input}
        placeholder=' Digite seu nome' />
      <TextInput 
        style={styles.input2}
        placeholder=' Digite sua área' />
      <TouchableOpacity
        style={styles.btnSave}
        onPress={ () => {} }
      >
      <Text style={styles.btnTxt}>Salvar Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}