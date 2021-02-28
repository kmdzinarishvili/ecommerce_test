import React, { useCallback, useState, useEffect } from 'react';
import { Pressable, SafeAreaView, FlatList, Text } from 'react-native';
import ProductPreview from '../components/ProductPreview';
import SafeView from '../components/SafeView';
import styles from '../styles/styles';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';


const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 8;


    const fetchProducts = async () => {
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products?_page=${page}&_limit=${limit}`
        ).then(res => res.json())
            .then(json => {
                setProducts(prods => [...prods, ...json]);
            }).catch((error) => {
                console.log(error);
                throw error;
            }
            );

    };
    useEffect(() => {
        fetchProducts();
    }, [page]);



    return (

        <SafeView>
            <NavBar name={'Product List'} navigation={navigation} />
            <Cart />

            <FlatList
                data={products}
                keyExtractor={item => `list-item${item.id}`}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Product', { id: item.id });
                        }}>
                        <ProductPreview
                            id={item.id}
                            title={item.title}
                            desc={item.description}
                            img={item.image}
                            seller={item.seller}
                            price={item.price}
                            color={item.id % 2 === 0 ?
                                styles.backgroundOrange : styles.backgroundBlue}
                        />
                    </Pressable>
                )}

                onEndReached={() => {
                    setPage(page + 1);
                }}
            />

        </SafeView>
    );
}

export default ProductList;