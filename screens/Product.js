import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import SafeView from '../components/SafeView';
import styles from '../styles/styles';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';


const Product = ({ route, navigation }) => {
    const id = route.params.id;
    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);
    const [isRefreshing, setIsResfreshing] = useState(true);

    const fetchReviews = async () => {

        await fetch(`https://us-central1-js04-b4877.cloudfunctions.net/api/products/1/reviews`)
            .then(res => {
                console.log(res);
                return (res.json());
            })
            .then(json => {
                setReviews(json);
            }
            ).catch((error) => {
                console.log(error);
                throw error;
            }
            );

    };


    const fetchProduct = async () => {
        await fetch(
            `https://us-central1-js04-b4877.cloudfunctions.net/api/products/${id}`
        ).then(res => {
            return res.json();
        }
        ).then(json => {
            setItem(json);
            setIsResfreshing(false);
        }
        ).catch((error) => {
            console.log(error);
            throw error;
        }
        );

    };
    useEffect(() => {
        fetchProduct();
        fetchReviews();
    }, []);

    return (
        isRefreshing ?
            <View>
                <Text>Loading</Text>
            </View> :
            <SafeView style={[item.id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray,
            ]}
            >
                <Cart />
                <NavBar name={'Home'} navigation={navigation} />
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <AutoHeightImage width={Dimensions.get('window').width - 80}
                        source={{
                            uri: item.image
                        }}
                        style={{ margin: 20 }} />

                    <Text>{item.seller}</Text>
                    <Text style={[productStyles.space, productStyles.title]}>{item.title}</Text>
                    <Text style={[productStyles.space, productStyles.desc]}>{item.description}</Text>
                    <Text style={[productStyles.space, productStyles.price]}>${item.price.toFixed(2)}</Text>
                    <Text>Reviews:</Text>
                    <FlatList
                        data={reviews}
                        keyExtractor={rev => `item=${rev.id}`}
                        renderItem={({ item }) => (
                            <View style={productStyles.rev}>
                                <Text>{item.body}</Text>
                            </View>)}
                    />
                </ScrollView>
            </SafeView>
    );
}

const productStyles = StyleSheet.create({
    space: {
        margin: 10
    },
    rev: {
        padding: 15,
        margin: 10
    },
    title: {
        fontSize: 30
    },
    desc: {
        fontSize: 20
    },
    price: {
        fontSize: 25, color: 'teal'
    }
});
export default Product;