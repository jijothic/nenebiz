import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  StyleSheet,
 } from 'react-native';

 import colors from '../constants/colors';


 export default class Listings extends Component {

  renderListings(){
    const { listings } = this.props;
    return (
      <TouchableOpacity>
        <View>
          <Text>{listings.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
   render() {
     const { title } = this.props;
     return (
       <View style={styles.wrapper}>
         <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
              <Ionicons
                name='ios-arrow-forward'
                size={18}
                color={colors.grey}
              />
             </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{paddingRight: 30}}
            decelerationRate={0}
            snapToInterval={200}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {this.renderListings()}
          </ScrollView>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   wrapper: {
    display: 'flex',
   },
   titleWrapper: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     paddingLeft: 21,
     paddingRight: 21,
   },
   title: {
     color: colors.grey,
   },
   seeAllBtn: {
     marginTop: 2,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
   },
   seeAllBtnText: {
     color: colors.grey,
     marginRight: 5,
   },
   scrollView: {
     marginTop: 20,
     marginLeft: 15,

   },

 });