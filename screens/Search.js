import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';
import styles from '../styles/styles';
import NavBar from '../components/NavBar';


//https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=intel

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({});

    const search = async () => {
        console.log(`https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=${searchTerm}`);
        const result = await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=${searchTerm}`
        ).catch((error) => {
            console.log(error);
            throw error;
        }
        );

        if (result.ok) {
            const resJSON = await result.json();
            setSearchResults(resJSON);
        }
    };
    useEffect(() => {
        search();
    }, [searchTerm]);

    return (
        <SafeAreaView>
            <NavBar name={'Search'} />
            <TextInput
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                placeholder='Search Items'
                style={{
                    height: 40, margin: 10, backgroundColor: '#ddd',
                    borderRadius: 10, padding: 10
                }}
            />
            <Text>{searchTerm}</Text>
            <FlatList
                data={searchResults}
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
                    </TouchableOpacity>)
                }

            />
        </SafeAreaView>
    );
}

export default Search;