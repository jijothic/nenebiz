import React, { Component } from 'react';
import { StatusBar, FlatList, ScrollView, View, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';
import SearchBar from '../commons/SearchBar';
import Categories from '../components/Categories';
import colors from '../constants/colors';
import categoryList from '../constants/categories';

const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../../assets/img/cart.png'),
  },
  {
    id: 2,
    title: 'Drugs',
    image: require('../../assets/img/drugs.png'),
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../../assets/img/pets.png'),
  },
  {
    id: 4,
    title: 'video games',
  },
];

const NUM_COLUMNS = 3;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'nenebiz',
    headerLeft: <ProfileBtn />,
  };

  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <View style={styles.wrapper}>
      <Box h={130} bg="white" w={1}>
          <DealCaroussel />
        </Box>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.heading}>Explore Nenebiz</Text>
        <View style={styles.categories}>
          <Categories categories={categoryList} />
        </View>
      </ScrollView>
    </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 10,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,

  },
  heading: {
    fontSize: 22,
    paddingLeft: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: colors.black,
  }

});

//  <Box f={1} p={10}>
//<FlatList
//data={categories}
//renderItem={this.renderItem}
//keyExtractor={this.keyExtractor}
//numColumns={NUM_COLUMNS}
//ItemSeparatorComponent={this.separator}
///>
//</Box>
