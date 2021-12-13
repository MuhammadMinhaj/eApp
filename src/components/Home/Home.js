import { Divider } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Search from '../Search/Search';
const Home = () => {
    return (
        <View>
            <Header />
            <Divider />
            <Search />
            <Banner />
        </View>
    );
};

export default Home;
