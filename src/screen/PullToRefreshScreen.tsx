import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Title} from '../components/Title';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setData('Hello World');
    }, 1000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['red', 'yellow']}
        />
      }>

      <View>
        <Title title="Pull Refresh" />
        {data && <Title title={data} />}
      </View>

    </ScrollView>
  );
};
