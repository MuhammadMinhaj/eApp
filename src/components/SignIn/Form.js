import React from 'react';
import { View } from 'react-native';
import PasswordField from './Password';
import styles from './styles';
const Form = () => {
  return (
    <View style={styles.form}>
      <PasswordField />
    </View>
  );
};

export default Form;
