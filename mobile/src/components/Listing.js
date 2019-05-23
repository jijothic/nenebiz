import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
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
   render() {
     const { title } = this.props;
     return (
       <View style={styles.wrapper}>
         <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <TouchableHighlight style={styles.seeAllBtn}>
              <Text style={styles.seeAllBtnText}>See all</Text>
             </TouchableHighlight>
          </View>
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
   },
   title: {
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
   }
 });