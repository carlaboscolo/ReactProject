import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import MoviePage from "../screens/MoviePage";
import MovieDetail from "../screens/MovieDetail";

const Stack = createNativeStackNavigator();

const MovieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movie"
        component={MoviePage}
        options={{
          title: 'Film',
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
        name="MovieDetail"
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
    </Stack.Navigator>
  );
};

export default MovieStack;