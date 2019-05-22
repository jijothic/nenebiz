import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class Horizontalscrollitems extends Component {
  state = {}
  render() {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollContainer}>
          <Text>Hello</Text>
          <Text>Hello</Text>

        </View>

      </ScrollView>
    );
  }
}

export default Horizontalscrollitems;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  }
})