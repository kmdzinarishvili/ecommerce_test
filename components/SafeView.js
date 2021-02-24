import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

const SafeView = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.view, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: StatusBar.currentHeight,
        marignRight: 0
    }
});

export default SafeView;

//animacia