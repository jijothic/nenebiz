import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import NoResults from '../components/NoResults';

class Favoritescreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <NoResults />
      </Box>
    );
  }
}

export default Favoritescreen;
