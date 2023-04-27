import React, {useState} from 'react';
import {ActivityIndicator, Animated, Image, View} from 'react-native';
import {useFade} from '../hooks/useFade';

interface Props {
  item: number;
}
export const FadeImage = ({item}: Props) => {
  const {opacity, fadeIn} = useFade();
  const [isLoading, setIsLoading] = useState(true);

  const showImage = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={'red'}
          size={30}
        />
      )}

      <Animated.Image
        onLoadEnd={showImage}
        source={{uri: `https://picsum.photos/id/${item}/1024/720`}}
        style={{
          height: 200,
          width: '100%',
          opacity,
        }}
      />
    </View>
  );
};
