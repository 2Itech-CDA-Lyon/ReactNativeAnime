/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import AllAnime from './screens/AllAnime';
import AnimeDetails from './screens/AnimeDetails';

const App: FC = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={AllAnime} title="Home" initial />
        <Scene key="animeDetails" component={AnimeDetails} title="Anime Details" />
      </Scene>
    </Router>
  );
};

export default App;
