import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

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
            <SafeAreaView style={[styles.box,
            { backgroundColor: item.id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray }
            ]}>
                <AutoHeightImage width={Dimensions.get('window').width - 80}
                    source={{
                        uri: img
                    }} />
                <Text>{item.seller}</Text>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>

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