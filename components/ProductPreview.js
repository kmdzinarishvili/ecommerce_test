import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import styles from '../styles/styles';
import AutoHeightImage from 'react-native-auto-height-image';


const ProductPreview = ({ title, img, seller, price, color }) => {
    return (
        <View style={[color, styles.box, { padding: 20 }]}>
            <AutoHeightImage
                width={Dimensions.get('window').width - 80}
                source={{
                    uri: img
                }
                }
            />
            <Text style={productStyles.text}>{seller}</Text>
            <Text style={[productStyles.text, { fontSize: 20 }]}>{title}</Text>
            <Text style={[productStyles.text, { fontSize: 25, color: 'teal' }]}>${price.toFixed(2)}</Text>
        </View >
    );
}

const productStyles = StyleSheet.create({
    text: {
        paddingTop: 10,
    }

});

export default ProductPreview;