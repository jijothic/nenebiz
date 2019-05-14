import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar, FlatList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';
import SearchBar from '../commons/SearchBar';

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

  state = {
    active: 'Restaurant'
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

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
    const tabs =  ['Restaurants', 'Garage', 'Boutique', 'Salon', 'Supermarket'];
    return (


      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box f={1} p={1}>
          <Box h={90}>
            <SearchBar />
          </Box>
        </Box>
        <Box h={130} bg="white" w={1}>
          <DealCaroussel />
        </Box>
        <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => this.renderTab(tab))}
        </Block>
      </Box>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create ({
  tab: {
    marginRight: 32,
    paddingBottom: 16
  },
  active: {
    borderBottomColor: "#2BDA8E",
    borderBottomWidth: 3,
  },
})

//  <Box f={1} p={10}>
//<FlatList
//data={categories}
//renderItem={this.renderItem}
//keyExtractor={this.keyExtractor}
//numColumns={NUM_COLUMNS}
//ItemSeparatorComponent={this.separator}
///>
//</Box>
