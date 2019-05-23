import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../constants/colors'

export default class NoResults extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Favourites</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: colors.black01,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

