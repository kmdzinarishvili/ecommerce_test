import React from 'react';
import { useEffect } from 'react';
import { Image, Dimensions } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';


const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;


function AnimatedPicture({img}) {
    const offset = useSharedValue(0);
    const y = useSharedValue(0);
    const s = useSharedValue(1);
    const zIndex = useSharedValue(0);
    const opacity = useSharedValue(1);
    const  borderRadius= useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            borderRadius: withSpring(borderRadius.value, ),
            zIndex: withSpring(zIndex.value, ),
            opacity: withSpring(opacity.value, ),
            transform: [
                {
                    translateX: offset.value,
                },
                {
                    translateY: y.value ,
                },
                {
                    scale: s.value,
                },
            ],
        };
    });

    const move = () => {
        console.log('qwqwqwqw', wWidth-50)
        offset.value = withSpring(95+((wWidth-95)*0.25));
        y.value = withSpring(wHeight-wWidth-95+((wWidth-95)*0.25)+100);
        s.value = withSpring(0.25);
        borderRadius.value= 1000;
        zIndex.value = 999;
        opacity.value = 1
        setTimeout(()=>{
            opacity.value=0;
            offset.value=0;
            y.value=0;
            s.value=1;
            borderRadius.value=0;
            zIndex.value=0;
        },700)

    }

    useEffect(()=>{
        move();
    }, []);
    
    return (
        <>
        <Animated.View
            style={[
                { width: wWidth-95, height:wWidth-95, zIndex: 0, overflow:'hidden', backgroundColor:'red', position:'absolute',top:0, left:0},
                animatedStyles,
            ]} >
            <Image
                style={{width:wWidth-95, height:wWidth-95}}
                source={{
                    uri: img
                }
                } />
        </Animated.View>

    
    </>
    );
}

export default AnimatedPicture;