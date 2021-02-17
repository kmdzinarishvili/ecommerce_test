import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import Search from './screens/Search';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      {/* < Home />
      <Product />
      <Search /> */}
      {/* add navigation right after this  */}
      <ProductList />

    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
