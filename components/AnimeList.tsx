import React, { FC } from 'react';
import { View } from 'react-native';
import IAnime from '../models/IAnime';
import Anime from './Anime';


interface AnimeListProps{
  animes: IAnime[];
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {
  return (
    <View>
      {animes.map(anime => <Anime anime={anime} />)}
    </View>
  );
};

export default AnimeList;
