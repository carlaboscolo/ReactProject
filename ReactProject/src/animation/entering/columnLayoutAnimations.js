import {Dimensions} from "react-native";
import {withSpring, withTiming} from "react-native-reanimated";

const height = Dimensions.get('window').height;

export const columnLayoutAnimation = () => {
    'worklet';

    const animations = {
        originY: withSpring(1, { duration: 400 }), 
        opacity: withSpring(1, { duration: 300 }),  
    };

    const initialValues = {
        originY: height,
        opacity: 0,
    };

    return {
        initialValues,
        animations,
    };

}
