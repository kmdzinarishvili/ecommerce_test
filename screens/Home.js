import React, { useCallback, useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, FlatList, Text } from 'react-native';
import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';
import styles from '../styles/styles';



const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const result = await fetch(
            'https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc'
        ).catch((error) => {
            console.log(error);
            throw error;
        }
        );
        if (result.ok) {
            const resJSON = await result.json();
            console.log(resJSON.slice(0, 10));
            setProducts(resJSON.slice(0, 10));
        }
    };
    useEffect(() => {
        fetchProducts();
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
                            color={item.id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray}
                        />
                    </TouchableOpacity>)}

            />
        </SafeAreaView>
    );
}

export default Home;