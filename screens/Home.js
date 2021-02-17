import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);


    const fetchProducts = useCallback(async () => {
        const result = await fetch(
            'https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc'
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
        <SafeAreaView>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ backgroundColor: 'red' }}
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
                        />
                    </TouchableOpacity>)}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </SafeAreaView>
    );
}

export default Home;