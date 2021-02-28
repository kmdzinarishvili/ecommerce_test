import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const Menu = ({ navigate }) => {
    console.log(navigate);
    return (<Pressable
        style={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 10
        }}
        onPress={navigate}
    >
        <View style={{
            width: 40,
            height: 10,
            backgroundColor: 'black',
            borderRadius: 10
        }}></View>
        <View style={{
            width: 40,
            height: 10,
            backgroundColor: 'black',
            borderRadius: 10
        }}></View>
        <View style={{
            width: 40,
            height: 10,
            backgroundColor: 'black',
            borderRadius: 10
        }}></View>


    </Pressable>);
}

const NavBar = ({ name, navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            margin: 10
        }}>
            <Menu navigate={() => navigation.navigate('Navigation')} />

            <Text style={{
                fontWeight: 'bold',
                fontSize: 30
            }}>{name}</Text>
            <Image
                style={
                    {
                        width: 50,
                        height: 50,
                    }
                }
                source={{
                    uri:
                        'https://lh3.googleusercontent.com/RYCWIG5RchIPW4uv1OoOp6XshQ7TbRmj1vlf46rbV1uXlFj9k8M3eAQpN-Qg8ePE7CqG6OSXUJhED1tfbF8yiv_su1Mvbz2LEl70Tw=w1064-v0'
                }}
            />
        </View >);


}
export default NavBar;