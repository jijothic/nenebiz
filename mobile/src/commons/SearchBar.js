import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="ios-search"
            size={20}
            color={colors.green}
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
    width: '100%',
    height: 80,
    zIndex: 99,

  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: colors.grey01,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 3,
    height: 40,
    marginTop: 5,
    marginLeft: 21,
    marginRight: 21
  },
  searchIcon: {
    position: 'absolute',
    right: 18,
    top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 10,
    marginLeft: 45,
    color: colors.grey,
  },
});