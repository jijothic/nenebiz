import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';


export default class Stars extends Component {
  get stars() {
    const { votes, size, color } = this.props;
    const starsNumber = parseInt(votes);
    const starElements = [];
    for (let i = 0; i < 5; i++) {
     starElements.push(
       <Ionicons
        name='ios-star'
        size={size}
        color={starsNumber > i ? color : colors.grey02}
        style={styles.star}
      />
     );;
    }
    return starElements;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.stars}>
          {this.stars}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 1,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
