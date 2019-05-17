import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import iPhoneSize from '../constants/helper';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}
export default class Categories extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => {
      return(
        <TouchableOpacity
          style={styles.card}
          key={`category-item-${index}`}
        >
          <Image
            source={category.photo}
            style={styles.image}
          />
        </TouchableOpacity>
      );
    });
  }

  render() {
  	return (
  	  <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal={true}
        showHorizontalScrollIndicator={false}
      >
  	    {this.Categories}
  	  </ScrollView>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
  	flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
})