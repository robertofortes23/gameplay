import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props {
  children: ReactNode;
}

export function Background({children}: Props) {
  const { secondary40, secondary60 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary60, secondary40]}
    >
      {children}
    </LinearGradient>
  );
}
