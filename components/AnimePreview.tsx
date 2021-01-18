import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import IAnime from '../models/IAnime';

interface AnimeProps {
  anime: IAnime;
}

const AnimePreview: FC<AnimeProps> = ({ anime }) =>
  <Card>
    <Card.Title>{anime.attributes.canonicalTitle}</Card.Title>
    <Card.Divider />
    {
      anime.attributes.coverImage && <Card.Image source={{ uri: anime.attributes.coverImage.small }} />
    }
    <Card.Divider />
    <Text>
      {anime.attributes.description}
    </Text>
    <Button title="Details" onPress={() => Actions.animeDetails({ id: anime.id })} />
  </Card>
;

export default AnimePreview;
