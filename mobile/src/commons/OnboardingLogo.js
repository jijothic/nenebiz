import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Box mb="sm">
    </Box>
    <Text size="sm" center>Sign up to add, Favourite & Rate your favorite places.</Text>
  </Box>
);

export default OnboardingLogo;