
import React, { useState, useEffect } from 'react';
import {  Pressable, FlatList } from 'react-native';


import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import SafeView from '../components/SafeView';

import ProductPreview from '../components/ProductPreview';
import AnimatedPicture from '../components/AnimatedPicture';

import customFetch from '../addFunctions/customFetch';

import styles from '../styles/styles';




const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [img,setImg]= useState();


    const fetchProducts = () => {
        customFetch( 'https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc', 
        (json) =>{
            setProducts(json.slice(1,10));
        });

    };

    useEffect(() => {
       fetchProducts();
        
    }, []);
    const press = () =>{
        setPressed(true);
        setTimeout(()=>{
            setPressed(false);
        },650);
    }

    return (
        <SafeView>
            <Cart />
            {pressed&&<AnimatedPicture img={img} />}
            <NavBar name={'Home'} navigation={navigation} />
            <FlatList
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{
                    margin: 0,
                }}
                data={products}
                keyExtractor={item => `item-${item.id}`}
                renderItem={({ item }) => (
                    <Pressable
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
                            onPress={press}
                            setImg={setImg}
                        />
                    </Pressable>)}
            />
        </SafeView>
    );
}

export default Home;

