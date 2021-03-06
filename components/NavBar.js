import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const Menu = ({ navigate }) => {
    return (
    
    <Pressable
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

const Slider = () =>{
    return (
    
        <View
            style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: 10
            }}
        >
            <View style={{
                width: 40,
                height: 2,
                backgroundColor: 'black',
                borderRadius: 10,
                margin:10
            }}>
                <View style={{
                width: 7,
                height: 7,
                backgroundColor: 'black',
                borderRadius: 10,
                margin:10
            }}/>
             </View>
            <View style={{
                width: 40,
                height: 2,
                backgroundColor: 'black',
                borderRadius: 10
            }}>
            <View style={{
                width: 7,
                height: 7,
                backgroundColor: 'black',
                borderRadius: 10,
                marginVertical:10
            }}/>
            </View>
            <View style={{
                width: 40,
                height: 2,
                backgroundColor: 'black',
                borderRadius: 10,
                margin:10

            }}> 

            </View>
        </View>);

}

const NavBar = ({ name, navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingStart: 30,
            paddingEnd:30,
            paddingVertical:10
        }}>
            <Menu navigate={() => navigation.navigate('Navigation')} />

            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                color:'black'
            }}>
                {name}
                </Text>
                <Slider></Slider>
            {/* <Image
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
            /> */}
        </View >);


}
export default NavBar;