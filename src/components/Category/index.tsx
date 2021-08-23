import React from 'react';
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({ title, icon: Icon, checked = true, ...rest }: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
            <View style={checked ? styles.checked : styles.checked} />

            <Icon width={48} height={48} />

            <Text style={styles.title}>{title}</Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}