import React, { useEffect, useState } from 'react';
import { Pressable, FlatList, TextInput } from 'react-native';
import ProductPreview from '../components/ProductPreview';

import SafeView from '../components/SafeView';
import NavBar from '../components/NavBar';

import Cart from '../components/Cart';
import AnimatedPicture from '../components/AnimatedPicture';

import customFetch from '../addFunctions/customFetch';
import styles from '../styles/styles';



const Search = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({});
    const [pressed, setPressed] = useState(false);
    const [img,setImg]= useState();

    const search = async () => {
        customFetch(`https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=${searchTerm}`,
                (json)=>{
                    setSearchResults(json);
                });  
    };

    useEffect(() => {
        search();
    }, [searchTerm]);


    const press = () =>{
        setPressed(true);
        setTimeout(()=>{
            setPressed(false);
        },650);
    }

    return (
        <SafeView>
            {pressed&&<AnimatedPicture img={img} />}
            <NavBar name={'Search'} navigation={navigation} />
            <TextInput
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                placeholder='Search Items'
                style={{
                    height: 40, margin: 10, backgroundColor: '#ddd',
                    borderRadius: 10, padding: 10
                }}
            />
            <Cart />
            <FlatList
                data={searchResults}
                extraData={searchResults}
                keyExtractor={item => `item${item.id}`}
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
                            color={item.id % 2 === 0 ?
                                styles.backgroundOrange : styles.backgroundBlue}
                            onPress={press}
                            setImg={setImg}
                        />
                    </Pressable>)
                }

            />
        </SafeView>
    );
}

export default Search;