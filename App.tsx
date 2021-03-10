import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App(){
  return(
    <View style={style.container} >
      <Image source={require('./assets/back.png')} style={style.backgroundImage}/>
      <StatusBar style="auto"/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800099'
  },
  title: {
    fontFamily: '--apple-system, sans-serif',
    fontSize: 19,
    color: 'rgba(255, 255, 255, 1)',
    
  },
  description: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: 'rgba(207, 207, 207, 0.7)',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

