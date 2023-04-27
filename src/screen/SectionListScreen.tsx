import React from 'react';
import {Platform, SectionList, Text, View} from 'react-native';
import {Title} from '../components/Title';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={styles.marginGlobal}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text> {item} </Text>}
        renderSectionHeader={({section}) => <Title title={section.casa} />}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <Title title="Section list" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 30}}>
            <Title title={'Total Section: ' + casas.length} />
          </View>
        )}
      />
    </View>
  );
};
