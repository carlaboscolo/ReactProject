import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import UserPage from "../screens/UserPage";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserPage}
        options={{
          title: 'Profilo',
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

export default UserStack;