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
    const { votes } = this.props;
    if (votes === '0') {
      return <View></View>;
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.stars}>
          {this.stars}
          {votes ? <Text style={styles.votesNumber}>{votes}</Text> : null}
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
  votesNumber: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
    marginLeft: 3,
  },
});
