import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
const Or = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.textWrapper}>
        <Text category="h6" style={styles.text}>
          OR
        </Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Or;
