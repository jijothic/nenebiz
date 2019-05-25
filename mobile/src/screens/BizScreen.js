import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { EvilIcons } from '@expo/vector-icons';
import Button from '../commons/Button';
import { theme } from '../constants/theme';

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
        <Box w={1}>
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
  button: {
    paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor: theme.color.green,
  },
  textTitleAddBusiness: {
    color: theme.color.white,
    textAlign: 'center',
    fontWeight: '600',
  }

})

export default BizScreen;
