import React,{useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Title } from '../components/Title';

export const SwitchScreen = () => {
  
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <View style={styles.container}>
        < Title title='Switchs'/>
        <CustomSwitch isOn={state.isActive} />      

        <Text>{JSON.stringify(state, null, 5)}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
    },

})