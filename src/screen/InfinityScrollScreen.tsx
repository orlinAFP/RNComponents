import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {Title} from '../components/Title';
import {StyleSheet} from 'react-native';
import { FadeImage } from '../components/FadeImage';

export const InfinityScrollScreen = () => {
  const [number, setNumber] = useState<number[]>([0, 1, 2, 3, 4]);

  const renderitem = (item: number) => {
    return (
        <FadeImage item={item}/>
    );
  };

  const loadMoreData = () => {
    let tempArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      tempArray[i] = number.length + i;
    }
    setTimeout(() => {
        setNumber([...number, ...tempArray]);
        
    }, 2000);

  };

  return (
    <View style={{flex:1}}>
      <FlatList
        data={number}
        renderItem={({item}) => renderitem(item)}
        keyExtractor={number => number.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Title title="Infinity Scroll" />}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color={'red'} size={30} />
          </View>
        )}
      />
    </View>
  );
};

