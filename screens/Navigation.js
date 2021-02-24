import React from 'react';
import { View, ImageBackground, StyleSheet, FlatList, Pressable, Dimensions } from 'react-native';
import SafeView from '../components/SafeView';

const Item = ({ item }) => (
    <Pressable
        style={styles.text}
        onPress={item.onPress}>
        {item.name}
    </Pressable>

);

const Navigation = ({ navigation }) => {
    const image = { uri: 'https://i.pinimg.com/originals/8b/f5/26/8bf5265199a67a4c5d9e2049ebda9812.jpg' }
    const nav = [
        {
            name: 'Home',
            onPress: () => {
                navigation.navigate('Home')
            },
        },
        {
            name: 'Search',
            onPress: () => {
                navigation.navigate('Search')
            },
        },
        {
            name: 'Product List',
            onPress: () => {
                navigation.navigate('Product List')
            },
        }

    ];


    return (
        <SafeView>
            <ImageBackground source={image} style={[styles.image, styles.center, { padding: 40 }]}
                imageStyle={{ opacity: 0.4 }}>
                <View style={[styles.black,
                { width: Dimensions.get('window').width - 80 },
                { height: Dimensions.get('window').height - 80 }]}>
                    <FlatList
                        contentContainerStyle={[styles.center,
                        {
                            flex: 1,
                            justifyContent: 'center',
                        }]}
                        data={nav}
                        renderItem={({ item }) => (
                            <Item item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ImageBackground>
        </SafeView>

    );
}



const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        fontSize: 25
    },
    white: {
        color: '#FFF',
        padding: 10
    },
    black: {
        backgroundColor: '#666',
        borderRadius: 30
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        padding: 15,
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#0000000"
    }
});


export default Navigation;