import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductPreview = ({ id, title, desc, img, seller, price }) => {
    return (
        <View style={styles.box}>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{desc}</Text>
            <Text>{img}</Text>
            <Text>{seller}</Text>
            <Text>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
    }

});

export default ProductPreview;