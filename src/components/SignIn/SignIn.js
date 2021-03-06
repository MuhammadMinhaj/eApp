import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import Brand from '../Common/Brand/Brand';
import Form from './Form';
import styles from './styles';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Brand />
      </View>
      <Form navigation={navigation} />
      <View style={styles.footer}>
        <Text category="p1">
          Welcome to e
          <Text category="p1" status="danger">
            App
          </Text>
        </Text>
        <Text category="h6" status="basic">
          SIGN IN
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
