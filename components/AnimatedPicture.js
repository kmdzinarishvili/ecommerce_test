
import React, { useState, useRef } from 'react';
import { Button, Dimensions } from 'react-native';

import Animated, { withSpring, useSharedValue, useAnimatedStyle, Easing } from 'react-native-reanimated';
import AutoHeightImage from 'react-native-auto-height-image';
import { useEffect } from 'react/cjs/react.development';



const AnimatedPicture = (img) => {
    const offset = useSharedValue(0);
    const y = useSharedValue(0);
    const s = useSharedValue(1);
    const [borderRadius,] = useState(new Animated.Value(0));


    const animatedStyles = useAnimatedStyle((pressed) => {
        return {
            transform: [
                {
                    translateX: offset.value * 255,
                },
                {
                    translateY: y.value * 255,
                },
                {
                    scale: s.value,
                },


            ],
        };
    });


    const move = () => {
        offset.value = withSpring(Math.random());
        y.value = withSpring(Math.random());
        s.value = withSpring(Math.random());
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
    return (
        <>
            <Animated.View
                style={[
                    { width: Dimensions.get('window').width - 95, height: 100, zIndex: 999, flex: 1 },
                    animatedStyles,
                ]} >
                <AutoHeightImage
                    width={Dimensions.get('window').width - 95}
                    source={{
                        uri: "https://images-na.ssl-images-amazon.com/images/I/61O6q3wIulL._AC_UL320_SR320,320_.jpg"
                    }
                    } />
            </Animated.View>
            {/* <Button
                onPress={
                    () => {
                        offset.value = withSpring(Math.random());
                        y.value = withSpring(Math.random());
                        s.value = withSpring(Math.random());
                        Animated.timing(
                            borderRadius,
                            {
                                toValue: 100 / 2,
                                duration: 1000,
                                easing: Easing.linear
                            }
                        ).start();

                    }
                }
                title="Move"
            /> */}
        </>
    );
}


export default AnimatedPicture;