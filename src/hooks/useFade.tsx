import {useRef} from 'react';
import {Animated, Easing, PanResponder} from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const fadeIn = (callback?: Function) => {
    // Will change opacity value to 1 in 5 seconds
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));

    Animated.timing(top, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    // Will change opacity value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], 
    {useNativeDriver: false}
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return {
    fadeIn,
    fadeOut,
    opacity,
    top,
    pan,
    panResponder
  };
};
