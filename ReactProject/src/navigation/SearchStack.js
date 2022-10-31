import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//screens
import SearchPage from "../screens/SearchPage";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
   return(
     <Stack.Navigator>
      <Stack.Screen  
        options={{headerShown: false}}
        name="Search"
        component={SearchPage}
      />
     </Stack.Navigator>
   );
};

export default SearchStack;