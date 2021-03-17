import React, { useCallback, useState, useEffect } from 'react';
import { Pressable, SafeAreaView, FlatList, Text } from 'react-native';
import ProductPreview from '../components/ProductPreview';
import SafeView from '../components/SafeView';
import styles from '../styles/styles';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import AnimatedPicture from '../components/AnimatedPicture';


const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 8;
    const [pressed, setPressed] = useState(false);
    const [img,setImg]= useState();



    const fetchProducts = async () => {
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products?_page=${page}&_limit=${limit}`
        ).then(res => res.json())
            .then(json => {
                setProducts(prods => [...prods, ...json]);
            }).catch((error) => {
                throw error;
            }
            );

    };
    useEffect(() => {
        fetchProducts();
    }, [page]);

    const press = () =>{
        setPressed(true);
        setTimeout(()=>{
            setPressed(false);
        },650);
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