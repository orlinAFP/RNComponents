import React from 'react';
import {View, StyleSheet, Animated,} from 'react-native';
import { useFade } from '../hooks/useFade';

export const Animation101Screen = () => {
  const {pan, panResponder} = useFade();
  
  return (
    <View style={styles.container}>

      <Animated.View        
      {
        ...panResponder.panHandlers
      }
        style={[pan.getLayout(), styles.box]}
      />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
  },
});
