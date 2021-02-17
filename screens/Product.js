import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

const Product = ({ id }) => {
    const [item, setItem] = useState({});
    const [isRefreshing, setIsRefreshing] = useState(true);


    const fetchProduct = useCallback(async () => {
        console.log(id);
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products/${id}`
        ).then(res => {
            console.log("original res", res);
            console.log("json", res.json());
            setItem(res.json());
            setIsRefreshing(false);
        }
        )
            .catch((error) => {
                console.log(error);
                throw error;
            }
            );

    }, []);
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        isRefreshing ?
            <View>
                <Text>Loading</Text>
            </View> :
            <SafeAreaView style={styles.box}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
                <Text>{item.img}</Text>
                <Text>{item.seller}</Text>
                <Text>{item.price}</Text>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
    }

});

export default Product;