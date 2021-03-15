
import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import Animated, { withSpring, useSharedValue, useAnimatedStyle, Easing } from 'react-native-reanimated';
import AutoHeightImage from 'react-native-auto-height-image';
import { useEffect } from 'react/cjs/react.development';



const AnimatedPicture = ({img}) => {
    const offset = useSharedValue(0);
    const y = useSharedValue(0);
    const s = useSharedValue(1);
    const [borderRadius,] = useState(new Animated.Value(0));
    const [show, setShow] = useState(true);


    const animatedStyles = useAnimatedStyle((pressed) => {
        return {
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
        offset.value = withSpring(Dimensions.get('window').width -170);
        y.value = withSpring(Dimensions.get('window').height -170);
        s.value = withSpring(0.3);
        Animated.timing(
            borderRadius,
            {
                toValue: 100 / 2,
                duration: 1000,
                easing: Easing.linear
            }
        ).start();
    }

    useEffect(move, []);
    // useEffect(setTimeout(() => {
    //     setShow(false);
    // }, 1000), []);

    const timer = setTimeout(()=>{
        setShow(false);
    }, 1000);
    return (
        <>
            {show &&<Animated.View
                style={[
                    { width: Dimensions.get('window').width - 95, height: 100, zIndex: 999, flex: 1 },
                    animatedStyles,
                ]} >
                <AutoHeightImage
                    width={Dimensions.get('window').width - 95}
                    source={{
                        uri: img
                    }
                    } />
            </Animated.View>
            }
        
        </>
    );
}


export default AnimatedPicture;