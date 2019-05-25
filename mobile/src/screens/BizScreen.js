import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { EvilIcons } from '@expo/vector-icons';
import Button from '../commons/Button';

class BizScreen extends Component {
  static navigationOptions = {
    title: 'My Business'
  }
  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="dark-content" />
        <Box>
          <Button>
            <Text>Add Business</Text>
          </Button>
        </Box>
      </Box>
    );
  }
}

export default BizScreen;
