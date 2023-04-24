import React, { useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import { useFade } from '../hooks/useFade';


export const Animation100Screen = () => {
   const {fadeIn, opacity, top} = useFade();
  useEffect(() => {
    fadeIn();
  }, [])
  
  return (
    <View style={styles.container}>
        <Animated.View style={{...styles.box, opacity, transform:[{
          translateY: top
        }]}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        height:200,
        width:200,
        backgroundColor:'red'
    }


});