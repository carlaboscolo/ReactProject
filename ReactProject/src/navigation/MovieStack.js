import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Movie from "../screens/Movie";

const Stack = createNativeStackNavigator();

const MovieStack = () => {
   return(
     <Stack.Navigator>
      <Stack.Screen  
        name="Movie"
        component={Movie}
        options={{
            title: 'Movie',
            headerStyle: {
              backgroundColor: 'rgb(80, 54, 97)',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      />
     </Stack.Navigator>
   );
};

export default MovieStack;