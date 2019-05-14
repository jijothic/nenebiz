import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Text>Search for a business/service...</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 80,
  },
});