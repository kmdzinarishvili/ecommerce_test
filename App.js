import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import Search from './screens/Search';
import Navigation from './screens/Navigation';



const RootStack = createStackNavigator();

const MainStack = createStackNavigator();


const MainStackScreen = () =>{
  return (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Navigation"
      component={Navigation}
      options={{
        headerShown: false,
      }}
    />
 

    <MainStack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
      }}
    />

    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />

    <MainStack.Screen
      name="Product List"
      component={ProductList}
      options={{
        headerShown: false,
      }}
    />
  
  </MainStack.Navigator>

  );
}
const App = () => {
  return (
    <NavigationContainer >
      <RootStack.Navigator mode="modal"
             headerMode="none"   >
        <RootStack.Screen 
          name="Main"
          component={MainStackScreen}
          />
        <RootStack.Screen
          name="Product"
          component={Product}
    
        />
    </RootStack.Navigator>
    
    </NavigationContainer>
  );
}


export default App;

