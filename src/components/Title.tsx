import React from 'react'
import { styles } from '../theme/appTheme'
import { View, Text } from 'react-native';

interface Props {
    title: string
}

export const Title = ({ title }: Props) => {
    return (
        <View style={{ marginBottom: 10, ...styles.marginGlobal }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
