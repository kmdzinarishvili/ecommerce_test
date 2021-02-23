import React, { useCallback, useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, FlatList, Text } from 'react-native';
import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';
import styles from '../styles/styles';

const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);


    const fetchProducts = async () => {
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
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchProducts();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Product', { id: item.id });
                        }}>
                        <ProductPreview
                            id={item.id}
                            keyExtractor={item.id}
                            title={item.title}
                            desc={item.description}
                            img={item.image}
                            seller={item.seller}
                            price={item.price}
                            color={item.id % 2 === 0 ?
                                styles.backgroundOrange : styles.backgroundBlue}
                        />
                    </TouchableOpacity>)}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </SafeAreaView>
    );
}

export default ProductList;