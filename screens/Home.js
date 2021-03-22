
import React, { useState, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';

import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import SafeView from '../components/SafeView';

import ProductPreview from '../components/ProductPreview';
import AnimatedPicture from '../components/AnimatedPicture';
import Product from './Product';

import customFetch from '../addFunctions/customFetch';
import styles from '../styles/styles';



const Home = ({ navigation }) => {
    const ref = useRef();
    
    const [products, setProducts] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [img,setImg]= useState();
    const [showModal, setShowModal]= useState();


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
            {showModal &&<Product ref={ref} setShowModal={setShowModal}/>}
            <NavBar name={'Home'} navigation={navigation} />
            <FlatList
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{
                    margin: 0,
                }}
                data={products}
                keyExtractor={item => `item-${item.id}`}
                renderItem={({ item }) => (
                
                        <ProductPreview
                            ref={ref}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            seller={item.seller} 
                            price={item.price}
                            navigation={navigation}
                            keyExtractor={item.id}
                            item = {item}
                            color={item.id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray}
                            onPress={press}
                            setImg={setImg}
                            setShowModal={setShowModal}
                        />)}
            />
        </SafeView>
    );
}

export default Home;

