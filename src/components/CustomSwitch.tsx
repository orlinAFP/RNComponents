import React, { useState } from 'react'
import { Switch } from 'react-native'
interface Props {
    isOn: boolean
}

export const CustomSwitch = ({ isOn }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
    };

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

