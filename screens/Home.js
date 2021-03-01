// import React, { useState, useEffect } from 'react';
// import { Text, Pressable, FlatList } from 'react-native';
// import ProductPreview from '../components/ProductPreview';
// import SafeView from '../components/SafeView';
// import NavBar from '../components/NavBar';
// import styles from '../styles/styles';
// import Cart from '../components/Cart';



// const Home = ({ navigation }) => {
//     const [products, setProducts] = useState([]);


//     const fetchProducts = async () => {
//         const result = await fetch(
//             'https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc'
//         ).catch((error) => {
//             console.log(error);
//             throw error;
//         }
//         );
//         if (result.ok) {
//             const resJSON = await result.json();
//             setProducts(resJSON.slice(0, 10));
//         }
//     };
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     return (
//         <SafeView>
//             <Cart />
//             <NavBar name={'Home'} navigation={navigation} />
//             <FlatList
//                 contentContainerStyle={{
//                     margin: 0
//                 }}
//                 data={products}
//                 keyExtractor={item => `item-${item.id}`}
//                 renderItem={({ item }) => (
//                     <Pressable
//                         onPress={() => {
//                             navigation.navigate('Product', { id: item.id });
//                         }}>
//                         <ProductPreview
//                             id={item.id}
//                             keyExtractor={item.id}
//                             title={item.title}
//                             desc={item.description}
//                             img={item.image}
//                             seller={item.seller}
//                             price={item.price}
//                             color={item.id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray}
//                         />
//                     </Pressable>)}
//             />
//         </SafeView>
//     );
// }

// export default Home;

import React from 'react';
import { Button } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

function App() {
    const width = useSharedValue(50);
    return (
        <View>
            <SomeComponent width={width} />
            <Button onPress={() => (width.value = Math.random() * 300)} />
        </View>
    );
}
export default App;