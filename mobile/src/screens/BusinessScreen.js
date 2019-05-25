import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import ProfileBtn from '../commons/ProfileBtn';

class BusinessScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'nenebiz'),
  });

  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="dark-content" />
        <Text>Business  Screen</Text>
      </Box>
    );
  }
}

export default BusinessScreen;
