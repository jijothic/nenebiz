import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Box } from 'react-native-design-utility';

import NoResults from '../components/NoResults';

class Favoritescreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="light-content" />
            <NoResults />
        </ScrollView>
      </View>
    );
  }
}

export default Favoritescreen;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
  scrollView: {
    height: '100%',
  }
});
