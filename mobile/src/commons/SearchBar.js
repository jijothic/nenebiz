import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Icon
            name="ios-search"
            size={20}
            color:{colors.green}
            style={styles.searchIcon}
          />
          <Text style={styles.textInput}>Search for a business/service...</Text>
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
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 3,
  },
});