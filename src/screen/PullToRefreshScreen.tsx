import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Title} from '../components/Title';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <Title title="Pull Refresh" />
      </View>
    </ScrollView>
  );
};
