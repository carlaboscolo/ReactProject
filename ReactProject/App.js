import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/FontAwesome';
//screens
import SeriePage from './src/screens/Serie';
import FilmPage from './src/screens/Films';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer> 
    <Tab.Navigator>
   



    <Tab.Screen
        options={{
          title: 'Serie',
          tabBarIcon: ({color}) => (
             <Icon name="image" size={26} color={color} />
          ),
        }}
        name="Serie"
        component={SeriePage}
      />

<Tab.Screen
        options={{
          title: 'Film',
          tabBarIcon: ({color}) => (
             <Icon name="film" size={26} color={color} />
          ),
        }}
        name="Film"
        component={FilmPage}
      />

  </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;