import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

const SafeView = ({ children }) => {
    return (
        <SafeAreaView style={styles.view}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: StatusBar.currentHeight
    }
});

export default SafeView;

//animacia