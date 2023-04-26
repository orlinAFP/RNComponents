import React from 'react'
import { View, Alert, Button } from 'react-native'
import { Title } from '../components/Title';

export const AlertScreen = () => {

    const alert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }
    return (
        <View>
            <Title title='Alert'/>
            <Button
                title='Alert'
                onPress={alert}

            />
        </View>
    )
}

