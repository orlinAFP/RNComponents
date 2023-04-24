import React from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

interface Item {
  name: string;
  icon: string;
  components: string;
}
interface Props {
  data: Item[];
}

export const FlatListMenuItem = ({data}: Props) => {
  const natigation = useNavigation<StackNavigationProp<StackParams>>();
  
  const itemMenu = (item: Item) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => natigation.navigate(item.components as any)}>
      <View style={{flexDirection: 'row'}}>
        <Text>
          <Icon name={item.icon} size={25} color="gray" />
        </Text>
        <Text style={{marginLeft:10}}>{item.name}</Text>
        <View style={{flex:1}}/>
        <Text>
          <Icon name="chevron-forward-outline" size={25} color="gray" />
        </Text>
      </View>
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,          
        }}
      />
    );
  };
  const header = () => {
    return (
      <View style={{marginBottom:10}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => itemMenu(item)}
      keyExtractor={item => item.name}
      ItemSeparatorComponent={separator}
      ListHeaderComponent={header}
    />
  );
};


