import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  View,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '../navigation/StackNavigator';
import {useFade} from '../hooks/useFade';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const {height: heightScreen, width: widthScreen} = Dimensions.get('window');

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [activityIndex, setActivityIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {opacity, fadeIn} = useFade();

  const navigator = useNavigation<StackNavigationProp<StackParams>>();

  const renderItem = (item: Slide) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 40}}>
        <Image
          source={item.img}
          style={{height: '60%', width: 350, resizeMode: 'center'}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'purple'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 40,
      }}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        onSnapToItem={index => {
          setActivityIndex(index);
          if (index === 2) {
            setIsVisible(true)
            fadeIn();
          };
        }}
        layout="default"
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activityIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'purple',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        {isVisible && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 40,
                width: 100,
                backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
              activeOpacity={0.7}
              onPress={() => navigator.navigate('HomeScreen' as any)}>
              <Text style={{fontSize: 18, color: 'white'}}>Home</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};
