import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Background() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
    </LinearGradient>
  );
}
