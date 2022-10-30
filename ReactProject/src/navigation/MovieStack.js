import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Movie from "../screens/Movie";

const Stack = createNativeStackNavigator();

const MovieStack = () => {
   return(
     <Stack.Navigator>
      <Stack.Screen  
        options={{headerShown: false}}
        name="Movie"
        component={Movie}
      />
     </Stack.Navigator>
   );
};

export default MovieStack;