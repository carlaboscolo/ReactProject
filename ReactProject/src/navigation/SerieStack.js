import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import SeriePage from "../screens/SeriePage";
import SerieDetail from "../screens/SerieDetail";


const Stack = createNativeStackNavigator();

const SerieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Serie Tv"
        component={SeriePage}
        options={{
          title: 'Serie',
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
        name="SerieDetail"
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

export default SerieStack;