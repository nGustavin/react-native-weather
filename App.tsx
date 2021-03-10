import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App(){
  return(
    <View style={style.container} >

      <Image source={require('./assets/back.png')} style={style.backgroundImage}/>
      <StatusBar style="auto"/>
      
      <View style={style.locationInfo}>
        <Text style={style.locationTitle}>Curitiba, Parana</Text>
        <Text style={style.locationDate}>10/03/2021</Text>
      </View>

      <View style={style.weatherContainer}>
        <Text style={style.currentWeatherText}>22°</Text>
        <View style={style.minMaxContainer}>
          <Text style={style.currentWeatherMinMax}>Min: 12°</Text>
          <Text style={style.currentWeatherMinMax}>Max: 27°</Text>
        </View>
      </View>

      <View style={style.weatherContainer}>
        <Text>Wind Speed</Text>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#800099',
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
  },

  locationInfo: {
    width: '90%',
    height: 100,
    borderRadius: 9,
    marginTop: '15%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  locationTitle: {
    fontSize: 38,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'sans-serif-thin',
  },

  locationDate: {
    fontSize: 19,
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: 'sans-serif-thin'
  },

  weatherContainer: {
    width: '90%',
    height: 'auto',
    borderRadius: 9,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  currentWeatherText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 100,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'sans-serif-thin',
  },

  currentWeatherMinMax: {
    fontSize: 35,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'sans-serif-thin',
  },
  
  minMaxContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 15,
  }
})

