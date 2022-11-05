import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import SearchPage from "../screens/SearchPage";
import MovieDetail from "../screens/MovieDetail";
import SerieDetail from "../screens/SerieDetail";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={SearchPage}
      />
      <Stack.Screen
        name="MovieDetailSearch"
        component={MovieDetail}
        options={{
          title: 'Dettaglio film',
          headerStyle: {
            backgroundColor: 'rgb(80, 54, 97)',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SerieDetailSearch"
        component={SerieDetail}
        options={{
          title: 'Dettaglio Serie',
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

export default SearchStack;