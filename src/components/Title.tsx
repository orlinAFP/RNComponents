import React, {useContext} from 'react'
import { styles } from '../theme/appTheme'
import { View, Text } from 'react-native';
import { ThemeContext } from '../contexts/theme/ThemeContext';

interface Props {
    title: string
}

export const Title = ({ title }: Props) => {

    const {theme:{colors}} = useContext(ThemeContext);
    return (
        <View style={{ marginBottom: 10, ...styles.marginGlobal }}>
            <Text style={{...styles.title, color:colors.text}}>{title}</Text>
        </View>
    )
}
