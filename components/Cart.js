import React from 'react';
import { Image } from 'react-native';

const Cart = () => {
    const image = { uri: 'https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=6&m=1206806317&s=612x612&w=0&h=Fo7D7nh_QPu758KRdbNTp7m4xSVOxBvJ2cfUvA1_k_U=' }
    return (
        <Image
            source={image}
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth:1,
                position: 'absolute',
                bottom: 100,
                right: 50,
                shadowColor: '#000',
                zIndex: 100,
                borderColor:'black',
                resizeMode:'cover'
            }}
        />);
}

export default Cart;


