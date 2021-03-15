import React from 'react';
import { ImageBackground } from 'react-native';

const Cart = () => {
    const image = { uri: 'https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=6&m=1206806317&s=612x612&w=0&h=Fo7D7nh_QPu758KRdbNTp7m4xSVOxBvJ2cfUvA1_k_U=' }
    return (
        <ImageBackground
            imageStyle={{
                borderRadius: 25
            }
            }
            source={image}
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'pink',
                position: 'absolute',
                bottom: 100,
                right: 50,
                shadowColor: '#000',
                zIndex: -1,
                shadowOffset: {
                    width: 6,
                    height: 6,
                },
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 1,
            }}
        />);
}

export default Cart;


