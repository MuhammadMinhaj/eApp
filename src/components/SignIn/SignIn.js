import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import Form from './Form';
import styles from './styles';
const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text category="h1"> Sign In</Text>
      <Form />
    </View>
  );
};

export default SignIn;
