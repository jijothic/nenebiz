import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, Image, View, Text } from 'react-native';

export default class Categories extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text>1</Text>
            <Text>2</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})