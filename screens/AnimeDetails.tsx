import React, { FC } from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import animes from '../data/anime';

interface AnimeDetailsProps {
  id: string,
  route: any,
}

const findAnimeById = (id: string) => {
  for (let anime of animes.data) {
    if (anime.id === id) {
      return anime;
    }
  }
  return null;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({ route }) => {
  const { id } = route.params;
  const anime = findAnimeById(id);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>{anime?.attributes.canonicalTitle}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default AnimeDetails;
