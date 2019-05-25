import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';

import ProfileBtn from '../commons/ProfileBtn';
import { theme } from '../constants/theme';
import ListColumn from '../commons/ListColumn';

const baseIconStyle = {
  size: 25,
  color: theme.color.grey,
};

const LINKS = [
  {
    link: 'Share',
    title: 'Invite friends',
    icon: <EvilIcons name="share-apple" {...baseIconStyle} />,
  },
  {
    link: 'Help',
    title: 'Help',
    icon: <Ionicons name="ios-help-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'About',
    title: 'About this app',
    icon: <Ionicons name="ios-information-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'Settings',
    title: 'Your accounts settings',
    icon: <Feather name="settings" {...baseIconStyle} />,
  },
];

class BusinessScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'nenebiz'),
  });

  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          {LINKS.map(el => (
              <ListColumn link={el.link} key={el.title}>
                <ListColumn.Left>
                  <Box dir="row" align="center">
                    <Box f={0.2}>{el.icon}</Box>

                    <Box f={1}>
                      <Text>{el.title}</Text>
                    </Box>
                  </Box>
                </ListColumn.Left>
                <ListColumn.Right>
                  <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle} />
                </ListColumn.Right>
            </ListColumn>
        </ScrollView>
      </Box>
    );
  }
}

export default BusinessScreen;
