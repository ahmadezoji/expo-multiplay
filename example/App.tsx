import { Button, PermissionsAndroid, Platform, StyleSheet, Text, ToastAndroid, View } from 'react-native';

import * as ExpoMultiplay from 'expo-multiplay';
import { useEffect } from 'react';

import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function App() {
  useEffect(() => {
    requestStoragePermission()
    
  });

  const requestStoragePermission = async () => {  
    if (Platform.OS === 'android') {
      const permission = await MediaLibrary.requestPermissionsAsync()
      if (permission.status !== 'granted') {
        return
      }
      ToastAndroid.show("garnted",ToastAndroid.SHORT);
    }
  }
  const init = () =>{
    ExpoMultiplay.init()
  }
  const play = () =>{
    const targetUri = FileSystem.documentDirectory + "sound1.mp3";
    ExpoMultiplay.play("/storage/emulated/0/Download/sound1.mp3")
  }
  return (
    <View style={styles.container}>
      <Button title="init" onPress={init} />
      <View style={{padding:20}}>
        <Button title='play' onPress={play}></Button>
      </View>
      <View style={{padding:20}}>
        <Button title='stop' onPress={init}></Button>
      </View>
      <View style={{padding:20}}>
        <Button title='back' onPress={init}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
