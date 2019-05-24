import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

import NoAdverts from '../components/NoAdverts'

class AdvertiseScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <NoAdverts />
      </View>
    );
  }
}

export default AdvertiseScreen;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  }
});
