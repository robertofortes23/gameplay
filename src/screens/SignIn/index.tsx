import React from 'react';
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles';

export function SignIn () {
  return(
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image}/>
      <View style={styles.container}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

      </View>
    </View>
  )
}
