import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { EvilIcons } from '@expo/vector-icons';
import Button from '../commons/Button';

class BizScreen extends Component {
  static navigationOptions = {
    title: 'My Business'
  }
  state = {};
  handleAddBusinessPress =  () => {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="dark-content" />
        <Box>
          <Button
           syle={styels.button}
          onPress={this.handleAddBusinessPress}
          >
            <Text
              style={styels.textTitleAddBusiness}
            >
              Add Business
            </Text>
          </Button>
        </Box>
      </Box>
    );
  }
}

const styels = StyleSheet.create({

})

export default BizScreen;
