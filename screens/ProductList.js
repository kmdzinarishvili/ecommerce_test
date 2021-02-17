import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ProductPreview from '../components/ProductPreview';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);


    const fetchProducts = useCallback(async () => {
        const result = await fetch(
            'https://us-central1-js04-b4877.cloudfunctions.net/api/products'
        ).catch((error) => {
            console.log(error);
            throw error;
        }
        );
        if (result.ok) {
            const resJSON = await result.json();
            setProducts(resJSON);
        }
    }, []);
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    }, []);

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProductPreview
                        id={item.id}
                        keyExtractor={item.id}
                        title={item.title}
                        desc={item.description}
                        img={item.image}
                        seller={item.seller}
                        price={item.price}
                    />)}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </View>
    );
}

export default ProductList;