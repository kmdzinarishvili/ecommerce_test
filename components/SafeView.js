import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

//fix this down the line 
const SafeView = () => {
    return (
        <SafeAreaView style={styles.view} />
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: StatusBar.currentHeight
    }
});

export default SafeView;