import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { NavigationService } from '../api/NavigationService';

class CategoryCard extends PureComponent {
  state = {};

  handlePress = () => {
    NavigationService.navigate('Category', { name: this.props.title });
  };

  render() {
    const { title, image } = this.props;
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Box center f={2}>
            <Text size="sm" center bold capitalizeEach color="#B5B5B5">
              {title}
            </Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    flex: 1,
  },
});

export default CategoryCard;
