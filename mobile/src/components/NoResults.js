import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
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
            Add your favourites Biz
          </Text>
          <Text
          style={styles.description}
          >
            Tap the heart on any home to start saving your favorites here.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.findBusiness}>
            <Text style={styles.findBusinessText}>Find Businesses</Text>
          </TouchableOpacity>
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
  	borderTopColor: colors.grey03,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  findBusiness: {
    paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor: colors.green01,
  },
  findBusinessText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});

