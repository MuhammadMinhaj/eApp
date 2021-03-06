import { Button, Icon, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import PasswordField from '../Common/Fields/Password';
import TextField from '../Common/Fields/TextField';
import styles from './styles';

const Form = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.form}>
      <TextField
        value={email}
        setValue={setEmail}
        iconName="email-outline"
        placeholder="Enter your email"
        label="Email address"
      />

      <PasswordField
        value={password}
        setValue={setPassword}
        placeholder="Enter your password"
        label="Password"
      />
      <Text category="label" status="basic">
        Forgot Password?
      </Text>
      <Button
        status="danger"
        style={{ borderRadius: 40, marginTop: 10 }}
        accessoryLeft={<Icon name="lock" />}>
        SIGN IN
      </Button>
      <Button
        status="basic"
        appearance="outline"
        style={{ borderRadius: 40, marginTop: 10 }}
        accessoryLeft={<Icon name="lock" />}
        onPress={() => navigation.navigate('Signup')}>
        SIGN UP
      </Button>
    </View>
  );
};

export default Form;
