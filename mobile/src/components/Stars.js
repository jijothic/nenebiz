import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';


export default class Stars extends Component {
  get stars() {
    const { votes } = this.props;
    const starsNumber = parseInt(votes);
    const starElements = [];
    for (let i = 0; i < 5; i++) {
     starElements.push(
       <Ionicons
        name='ios-star'
      />
     );;
    }
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
