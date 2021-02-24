import React from 'react';
import { View, Text } from 'react-native';

const NavBar = ({ name }) => {
    return (
        <View style={{
            height: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            margin: 10
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20
            }}>{name}</Text>
        </View>);


}
export default NavBar;