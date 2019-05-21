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
    title: 'Restaurant',
  },
  {
    id: 2,
    title: 'Garage',
  },
  {
    id: 3,
    title: 'Boutique',
  },
  {
    id: 4,
    title: 'Saloon',
  },
  {
    id: 5,
    title: 'Supermarket'
  },
];

const NUM_COLUMNS = 5;

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
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box style={styles.wrapper}>
          <SearchBar />
        </Box>

        <Box f={1}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
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
    paddingBottom: 100,
  },
  categories: {
    marginBottom: 40,
    marginTop: 2,

  },
  heading: {
    flex: 1,
    fontSize: 22,
    paddingLeft: 20,
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
