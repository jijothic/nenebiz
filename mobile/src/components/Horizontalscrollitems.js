import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const categoryIcons = (valeu) => {
  let name = '';
  switch(value){
    case 'Restaurant':
      name = ''
      break;
    case 'Garage':
      name = ''
      break;
    case 'Boutique':
      name = ''
      break;
    case 'Supermarket':
      name = ''
      break;
    case 'Saloon':
      name = ''
      break;
    default:
      name = ''

  }
}

class Horizontalscrollitems extends Component {
  state = {}

  generateIcon = (categ) => (
    categ ?
      categ.map( item => (
        <View style={{marginRight: 15}} key={item}>
          <Text
            style={styles.categoryTitle}
            onPress={() =>  this.props.updateCategoryHandler(item)}
          >
            {item}
          </Text>
        </View>
      ))
    :null
  )
  render() {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollContainer}>
          {this.generateIcon(this.props.categ)}
        </View>

      </ScrollView>
    );
  }
}

export default Horizontalscrollitems;

const styles = StyleSheet.create({
  categoryTitle: {
    marginRight: 10,
    marginLeft: 3,
    color: '#B5B5B5',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  }
})