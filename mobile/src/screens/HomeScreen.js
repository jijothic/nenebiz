import React, { Component } from 'react';
import { StatusBar, FlatList, ScrollView, View, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import Horizontalscrollitems from '../components/Horizontalscrollitems';

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


  this.state = {
    categ:['Restaurant','Garage','Boutique','Saloon','Saloon']
  }

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        <Box w={5 / NUM_COLUMNS} style={styles.categoryitems}>
          <CategoryCard {...item} />
        </Box>
      </ScrollView>
    );
  };

  keyExtractor = item => String(item.id);

  render() {
    return (
      // <Box f={1}>
      //   <StatusBar barStyle="light-content" />
      //   <Box style={styles.wrapper}>
      //     {/* <SearchBar /> */}
      //   </Box>
      // </Box>
      <ScrollView>
        <View style={styles.container}>
          <Horizontalscrollitems
            categ={this.state.categ}
          />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  categoryitems: {
    marginTop: 50,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 50,
  },
  scrollViewContent: {
    paddingBottom: 10,
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
  },
  container: {
    marginTop: 10,
  }
});