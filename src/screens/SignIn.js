import { Layout } from '@ui-kitten/components';
import React from 'react';
import SignIn from '../components/SignIn/SignIn';

const SignInScreen = ({ navigation }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <SignIn navigation={navigation} />
    </Layout>
  );
};

export default SignInScreen;
