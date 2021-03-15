import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import styles from '../styles/styles';
import AutoHeightImage from 'react-native-auto-height-image';



const ProductPreview = ({ title, img, seller, price, color, onPress, setImg }) => {
    return (
        <View style={[color, styles.box, { padding: 20 }]}>
            <AutoHeightImage
                width={Dimensions.get('window').width - 95}
                source={{
                    uri: img
                }
                }
            />
            <Text style={productStyles.text}>{seller}</Text>
            <Text style={[productStyles.text, productStyles.title]}>{title}</Text>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={[productStyles.text, productStyles.price,]}>${price.toFixed(2)}</Text>
                <Pressable
                    style={{ backgroundColor: 'red' }}
                    onPress={() => {
                        onPress();
                        setImg(img);
                    }}>
                    <Text style={productStyles.text}>Add To Cart</Text>
                </Pressable>
            </View>
        </View >
    );
}

const productStyles = StyleSheet.create({
    text: {
        paddingTop: 10,
    },
    title: {
        fontSize: 20
    },
    price: {
        fontSize: 25, color: 'teal'
    }
});

export default ProductPreview;