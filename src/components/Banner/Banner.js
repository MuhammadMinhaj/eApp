import React, { useRef } from 'react';
import { Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import bannerOne from '../../assets/images/banners/banner-1.jpg';
import bannerTwo from '../../assets/images/banners/banner-2.jpg';
import bannerThree from '../../assets/images/banners/banner-3.jpg';

const Item = ({ item }) => {
    return (
        <View style={{ margin: 10 }}>
            <Image
                source={item.source}
                style={{ width: '100%', height: 180, borderRadius: 10 }}
            />
        </View>
    );
};

const MyCarousel = () => {
    const carouselRef = useRef(null);
    const data = [
        { title: 'Assalamu Alaikums', source: bannerOne },
        { title: 'Wa Alaikums Salam', source: bannerTwo },
        { title: 'Wa Alaikums Salam', source: bannerThree },
    ];
    return (
        <Carousel
            ref={carouselRef}
            data={data}
            renderItem={Item}
            sliderWidth={390}
            itemWidth={390}
            onSnapToItem={i => console.log('I-', i)}
            layout={'default'}
            autoplay
        />
    );
};
export default MyCarousel;
