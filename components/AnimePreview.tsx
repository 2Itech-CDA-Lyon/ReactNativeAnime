import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import { Card } from 'react-native-elements';
import IAnime from '../models/IAnime';

interface AnimeProps {
  anime: IAnime;
}

const AnimePreview: FC<AnimeProps> = ({ anime }) => {
  const navigation = useNavigation();

  return (
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
      <Button title="Details" onPress={() => navigation.navigate('AnimeDetails', { id: anime.id })} />
    </Card>
  );
}

export default AnimePreview;
