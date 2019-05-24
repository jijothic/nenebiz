import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Box } from 'react-native-design-utility';

import Input from '../commons/Input';
import colors from '../constants/colors'

export default class NoAdverts extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text
          style={styles.heading}
          >
            Advertise
          </Text>
          <Text
          style={styles.description}
          >
            You don't have active campaigns.
          </Text>
          <Text
          style={styles.description}
          >
            Start under 5 minutes and make your business grow.
          </Text>
          <Input
           placeholder="Ad Budget"
           editable={false}
          />
          <Box dir='row'>
            <Box f={1}>
              <Input
              placeholder="Prefered Time"
              editable={false}
              />
            </Box>
            <Box f={1}>
              <Input
              placeholder="Days eg. 56..."
              editable={false}
              />
            </Box>
            </Box>
          <Input
           placeholder="Name of Business - Ridirect"
           editable={false}
          />
          <Input
           placeholder="Ad Caption"
           editable={false}
           containerStyle={{ height: 100 }}
           multiline
           />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.findBusiness}>
            <Text style={styles.findBusinessText}>Advertise Businesses</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 40,
    color: colors.black01,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black01,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    position: 'absolute',
  	width: '100%',
  	height: 80,
  	bottom: 0,
  	borderTopWidth: 1,
  	borderTopColor: colors.grey03,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  findBusiness: {
    paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor: colors.green01,
  },
  findBusinessText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});

