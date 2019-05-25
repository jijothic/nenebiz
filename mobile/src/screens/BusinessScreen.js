import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import ProfileBtn from '../commons/ProfileBtn';

class BusinessScreen extends Component {
  static navigationOptions = {
    title: 'My Business',
  };

  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>BusinessScreen</Text>
      </Box>
    );
  }
}

export default BusinessScreen;
