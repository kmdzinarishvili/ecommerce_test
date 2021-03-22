import React, { useState, useEffect } from 'react';
import { Pressable, Alert, FlatList, Modal, View, Text, StyleSheet, Dimensions } from 'react-native';

import AutoHeightImage from 'react-native-auto-height-image';


import SafeView from '../components/SafeView';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import customFetch from '../addFunctions/customFetch';

// import styles from '../styles/styles';




//consider adding back button for iphone users
const Product = ({ 
    route, navigation }) => {
     const {price, image, seller, title} = route.params;  
    // // add what is already loaded from the previews page 
    // //picture
    // //company
    // //name 
    const id = route.params.id;
    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(true);

    const fetchReviews = async () => {
        customFetch(`https://us-central1-js04-b4877.cloudfunctions.net/api/products/1/reviews`,
            (json)=>{
                setReviews(json);
            })
    };


    const fetchProduct = async () => {
        customFetch(`https://us-central1-js04-b4877.cloudfunctions.net/api/products/${id}`,
        (json)=>{
            setItem(json);
            setIsRefreshing(false);
        })
       

    };
    useEffect(() => {
        fetchProduct();
        fetchReviews();
    }, []);

    return (
        <View style={styles.whiteBackdrop}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
              navigation.goBack();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              
                    <View style={[id % 2 === 0 ? styles.backgroundOrange : styles.backgroundGray, {alignItems:'center'}
            ]}>
                     
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'center', paddingBottom: 100}}
                        ListHeaderComponentStyle={{alignItems:'center'}}
                        ListHeaderComponent= {
                            <>
                            <AutoHeightImage width={Dimensions.get('window').width - 140}
                            source={{
                                uri: image
                            }}
                            />
                            <Text>{seller}</Text>

                            <Text style={[productStyles.space, productStyles.title]}>{title}</Text>
                            {isRefreshing ?
            <View style={{justifyContent:'center',
                          alignItems:'center'}}>
                <Text>Description Loading</Text>
            </View> : <Text style={[productStyles.space, productStyles.desc]}>{item.description}</Text>}
                            <Text style={[productStyles.space, productStyles.price]}>${price.toFixed(2)}</Text>
                            <Text>Reviews:</Text>
                            </>
                        }
                        data={reviews}
                        keyExtractor={rev => `item=${rev.id}`}
                        renderItem={({ item }) => (
                            <View style={productStyles.rev}>
                                <Text>{item.body}</Text>
                            </View>)}
                        />
                    </View>
            
         </View>
          </View>
        </Modal>

      </View>    );
}

const productStyles = StyleSheet.create({
    space: {
        margin: 10
    },
    rev: {
        padding: 15,
        margin: 10
    },
    title: {
        fontSize: 30
    },
    desc: {
        fontSize: 20
    },
    price: {
        fontSize: 25, color: 'teal'
    }
});

  
  const styles = StyleSheet.create({
    whiteBackdrop:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  
export default Product;