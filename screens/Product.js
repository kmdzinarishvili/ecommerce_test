import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const Product = ({ route }) => {
    const id = route.params.id;
    const [item, setItem] = useState({});
    const [isRefreshing, setIsRefreshing] = useState(true);


    const fetchProduct = async () => {
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products/${id}`
        ).then(res => {
            console.log("original res", res);
            return res.json();
        }
        ).then(json => {
            console.log("json", json);
            setItem(json);
            setIsRefreshing(false);
        }
        )
            .catch((error) => {
                console.log(error);
                throw error;
            }
            );

    };
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
                        uri: item.image
                    }} />

                <Text>{item.seller}</Text>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>

                <Text>{item.price}</Text>
            </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
    }

});

export default Product;