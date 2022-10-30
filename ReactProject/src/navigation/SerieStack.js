import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Serie from "../screens/Serie";

const Stack = createNativeStackNavigator();

const SerieStack = () => {
   return(
     <Stack.Navigator>
      <Stack.Screen  
        options={{headerShown: false}}
        name="Serie Tv"
        component={Serie}
      />
     </Stack.Navigator>
   );
};

export default SerieStack;