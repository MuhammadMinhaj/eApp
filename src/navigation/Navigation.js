import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignIn';
const Stack = createNativeStackNavigator();
const screens = [
  {
    name: 'Signin',
    component: SignInScreen,
  },
];

const Navigation = () => {
  return (
    <Stack.Navigator>
      {screens.map(({ name, component }) => (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={name}
          component={component}
          key={name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigation;
