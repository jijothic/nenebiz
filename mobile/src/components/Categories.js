import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, Image, View, Text } from 'react-native';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }

  get Categories(){
    const { categories } = this.props;
    return categories.map((category, index) => {
      return(
        <TouchableHighlight
          style={styles.card}
        >
          <Image
            source={category.photo}
            style={styles.image}
          />
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.wrapper}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.Categories}
        </ScrollView>
      </View>
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
    width: 100,
    height: 100,
    marginRight: 8,
    marginLeft: 8,
  },
  image: {
    width: undefined,
    height: undefined,

  },
})