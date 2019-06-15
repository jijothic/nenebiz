import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Box } from 'react-native-design-utility';

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
 import Stars from '../components/Stars';


 export default class Listings extends Component {

  renderListings(){
    const { listings } = this.props;
    return listings.map((listing, index) =>{
      return (
        <TouchableHighlight
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Box dir='row'>
              <Box f={1}>
                <Image
                  style={styles.image}
                  resizeMode="contain"
                  source={listing.photo}
                />
              </Box>
              <Box f={1}>
                <Text style={styles.listingType}>{listing.type}</Text>
                <Text
                style={styles.listingTitle}
                numberOfLines={2}
                >

                </Text>
                <Text style={styles.listingPrice}>{listing.price} {listing.priceType}</Text>
                <Stars
                votes={listing.stars}
                size={12}
                color={colors.green}
                />
              </Box>
            </Box>

          </View>
        </TouchableHighlight>
      );
    });
  }
   render() {
     const { title, boldTitle } = this.props;
     const titleStyle = boldTitle ? {fontSize: 22, fontWeight: '600' } : { fontSize: 18 };
     return (
       <View style={styles.wrapper}>
         <View style={styles.titleWrapper}>
            <Text style={[titleStyle, styles.title]}>{title}</Text>
            {/* <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
              <Ionicons
                name='ios-arrow-forward'
                size={18}
                color={colors.grey}
              />
             </TouchableOpacity> */}
          </View>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{paddingRight: 30}}
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
     marginBottom: 40,
   },
   card: {
     marginRight: 6,
     marginLeft: 6,
     width: 157,
     flexDirection: 'column',
     minHeight: 100,
   },
   cardContent: {
   },
   image: {
     width: undefined,
     height: 100,
     borderRadius: 8,
     marginBottom: 2,
   },
   listingTitle: {
     fontSize: 14,
     fontWeight: '700',
     color: colors.black02,
     marginTop: 2,
   },
   listingType: {
     fontWeight: '700',
     fontSize: 10,
   },
   listingPrice: {
     color: colors.black02,
     marginTop: 4,
     marginBottom: 2,
     fontSize: 12,
     fontWeight: '600',
   }

 });