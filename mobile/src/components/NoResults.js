import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../constants/colors'

export default class NoResults extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text
          style={styles.heading}
          >
            Favourites
          </Text>
          <Text
          style={styles.description}
          >
            Not every day is filled with adventures, but you can start planning for the next one.
          </Text>
          <Text
          style={styles.description}
          >
            Tap the heart on any home to start saving your favorites here.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight>
            <Text>Find Businesses</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 40,
    color: colors.black01,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black01,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    position: 'absolute',
  	width: '100%',
  	height: 80,
  	bottom: 0,
  	borderTopWidth: 1,
  	borderTopColor: colors.gray05,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
});

