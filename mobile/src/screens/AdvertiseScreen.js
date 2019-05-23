import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import NoAdverts from '../components/NoAdverts'

class AdvertiseScreen extends Component {
  render() {
    return (
      <Veiw style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <NoAdverts />
      </Veiw>
    );
  }
}

export default AdvertiseScreen;

const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
  }
});
