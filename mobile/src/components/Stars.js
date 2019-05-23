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
        color={color}
      />
     );;
    }
    return starElements;
  }

  render() {
    return (
      <View>
        <View>
          {this.stars}
        </View>
      </View>
    );
  }
}
