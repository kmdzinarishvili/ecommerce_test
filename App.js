import React from 'react';
import { Dimensions, Image, StyleSheet, Platform, StatusBar, View, Text } from 'react-native';
import Home from './screens/Home';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import Search from './screens/Search';
import Navigation from './screens/Navigation';
import NavBar from './components/NavBar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <RootStack.Navigator>
        {/* <RootStack.Screen
          name="NavBar"
          component={NavBar}
          options={{
            headerShown: false,
          }}
        /> */}

        <RootStack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Product"
          component={Product}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Product List"
          component={ProductList}
          options={{
            headerShown: false,
          }}
        />





      </RootStack.Navigator>

    </NavigationContainer>
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
