import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: 'Home',
        component: HomeScreen,
    },
    {
        name: 'Signin',
        component: SignInScreen,
    },
    {
        name: 'Signup',
        component: SignUpScreen,
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
