import { Button, Icon } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import PasswordField from '../Common/Fields/Password';
import TextField from '../Common/Fields/TextField';
import Or from '../Common/Or/Or';
import styles from './styles';
const Form = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.form}>
      <View style={{ display: 'flex' }}>
        <TextField
          value={email}
          setValue={setEmail}
          iconName="person-outline"
          placeholder="Enter your full name"
          label="Full Name"
        />
        <TextField
          value={email}
          setValue={setEmail}
          iconName="phone-outline"
          placeholder="Enter your phone number"
          label="Phone No"
        />
      </View>
      <TextField
        value={email}
        setValue={setEmail}
        iconName="email-outline"
        placeholder="Enter your email address"
        label="Email address"
      />

      <PasswordField
        value={password}
        setValue={setPassword}
        placeholder="Enter a password"
        label="Password"
      />
      <PasswordField
        value={password}
        setValue={setPassword}
        placeholder="Re-type a password"
        label="Re-Type Password"
      />

      <Button
        status="danger"
        style={{ borderRadius: 40, marginTop: 10 }}
        accessoryLeft={<Icon name="plus-outline" />}>
        Create Account
      </Button>
      <Or />

      <Button
        status="basic"
        appearance="outline"
        style={{ borderRadius: 40, marginTop: 10 }}
        accessoryLeft={<Icon name="lock" />}
        onPress={() => navigation.navigate('Signin')}>
        SIGN IN
      </Button>
    </View>
  );
};

export default Form;
