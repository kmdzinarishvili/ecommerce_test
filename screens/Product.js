import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Product = ({ id }) => {
    const [item, setItem] = useState({});
    const [isRefreshing, setIsRefreshing] = useState(true);



    const fetchProduct = useCallback(async () => {
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products/${id}`
        ).then(res => res.JSON)
            .then(res => {
                setItem(res);
                setIsRefreshing(false);
            })
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
                <Text>{id}</Text>
                <Text>{title}</Text>
                <Text>{desc}</Text>
                <Text>{img}</Text>
                <Text>{seller}</Text>
                <Text>{price}</Text>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
    }

});

export default Product;