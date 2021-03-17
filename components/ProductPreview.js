import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import styles from '../styles/styles';
import AutoHeightImage from 'react-native-auto-height-image';



const ProductPreview = ({ 
    item, title, img, seller, price, color, onPress, setImg }) => {
    // console.log(item);
    // const {id, title, description, image, seller, price} = item;
    // console.log ("id", id);
    // console.log ('title', title);
    // console.log('description', description);
    // console.log('image', image);
    // console.log('seller', seller);
    // console.log('price', price);
    // const {title, img, seller, price, color} = item;
    //   id={item.id}
    // title={item.title}
    // desc={item.description}
    // img={item.image}
    // seller={item.seller}
    // price={item.price}
    return (
        <View style={[color, styles.box, { padding: 20 }]}>
            <AutoHeightImage
                width={Dimensions.get('window').width - 95}
                source={{
                    uri: img
                }
                }
            />
            <Text style={productStyles.text}>{seller}</Text>
            <Text style={[productStyles.text, productStyles.title]}>{title}</Text>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={[productStyles.text, productStyles.price]}>${price.toFixed(2)}</Text>
                <Pressable
                    onPress={()=>{
                        onPress();
                        setImg(img);
                    }}>
                    <Text style={productStyles.text}>Add To Cart</Text>
                </Pressable>
            </View>
        </View >
    );
}

const productStyles = StyleSheet.create({
    text: {
        paddingTop: 10,
    },
    title: {
        fontSize: 20
    },
    price: {
        fontSize: 25, color: 'teal'
    }
});

export default ProductPreview;