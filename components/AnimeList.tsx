import React, { FC } from 'react';
import { View } from 'react-native';
import IAnime from '../models/IAnime';
import AnimePreview from './AnimePreview';

interface AnimeListProps{
  animes: IAnime[];
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {
  return (
    <View>
      {animes.map(
        (anime, index) =>
          <AnimePreview key={index} anime={anime} />)
      }
    </View>
  );
};

export default AnimeList;
