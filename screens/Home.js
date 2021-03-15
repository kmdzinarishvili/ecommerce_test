import React, { useState, useEffect,useRef } from 'react';
import { Text, Pressable, FlatList } from 'react-native';
import ProductPreview from '../components/ProductPreview';
import SafeView from '../components/SafeView';
import NavBar from '../components/NavBar';
import styles from '../styles/styles';
import Cart from '../components/Cart';
import AnimatedPicture from '../components/AnimatedPicture';


const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [img, setImg] = useState('');
    const animationRef = useRef(null);

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
            setProducts(resJSON.slice(0, 10));
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const press = (img) => {
        console.log('here')
        setPressed(true);
        animationRef.current.animate()
    };

    return (
        <SafeView>
            <AnimatedPicture img={img}  ref={animationRef}/>
            <Cart />
            <NavBar name={'Home'} navigation={navigation} />
            <FlatList
                contentContainerStyle={{
                    margin: 0
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

