import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, TextInput, Text } from 'react-native';
import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';


//https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=intel

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({});

    const search = useCallback(async () => {
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
    }, []);
    useEffect(() => {
        search();
    }, [searchTerm]);

    return (
        <SafeAreaView>
            <TextInput
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <Text>{searchTerm}</Text>
            <FlatList
                data={searchResults}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProductPreview
                        id={item.id}
                        keyExtractor={item.id}
                        title={item.title}
                        desc={item.description}
                        img={item.image}
                        seller={item.seller}
                        price={item.price}
                    />)}

            />
        </SafeAreaView>
    );
}

export default Search;