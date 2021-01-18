import React, { FC } from 'react';
import { Text } from 'react-native';
import IAnime from '../models/IAnime';

interface AnimeProps {
  anime: IAnime;
}

const AnimePreview: FC<AnimeProps> = ({ anime }) =>
  <Text>
    {anime.attributes.canonicalTitle}
  </Text>
;

export default AnimePreview;
