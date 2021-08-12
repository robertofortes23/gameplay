import React from 'react';
import { View, Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../Profile';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  );
}