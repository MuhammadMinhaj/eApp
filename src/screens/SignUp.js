import { Layout } from '@ui-kitten/components';
import React from 'react';
import SignUp from '../components/Signup/Signup';

const SignUpScreen = ({ navigation }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <SignUp navigation={navigation} />
    </Layout>
  );
};

export default SignUpScreen;
