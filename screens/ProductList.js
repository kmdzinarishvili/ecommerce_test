import React, { useState, useEffect } from 'react';
import { Pressable, FlatList } from 'react-native';

import SafeView from '../components/SafeView';
import NavBar from '../components/NavBar';

import ProductPreview from '../components/ProductPreview';
import Cart from '../components/Cart';
import AnimatedPicture from '../components/AnimatedPicture';

import customFetch from '../addFunctions/customFetch';
import styles from '../styles/styles';



const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pressed, setPressed] = useState(false);
    const [img,setImg]= useState();

    const LIMIT = 8;


    const fetchProducts = async () => {

        customFetch(`https://us-central1-js04-b4877.cloudfunctions.net/api/products?_page=${page}&_limit=${LIMIT}`,
        (json)=>{
            setProducts(prods => [...prods, ...json]);
        });

    };
    useEffect(() => {
        fetchProducts();
    }, [page]);

    const press = () =>{
        setPressed(true);
        setTimeout(()=>{
            setPressed(false);
        },700);
    }


    return (

        <SafeView>
            {pressed&&<AnimatedPicture img={img} />}
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
                            onPress={press}
                            setImg={setImg}
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