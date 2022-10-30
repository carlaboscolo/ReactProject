import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//navigation
import MovieStack from "./MovieStack";
import SerieStack from "./SerieStack";



const Tab = createBottomTabNavigator();


const BottomStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'rgb(171,106,251)',
                tabBarStyle: {
                    backgroundColor: '#000',
                },
            }}>

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="tv" size={26} color={color} />
                    ),
                }}
                name="Serie"
                component={SerieStack}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="film" size={26} color={color} />
                    ),
                }}
                name="Film"
                component={MovieStack}
            />
        </Tab.Navigator>
    );
};

export default BottomStack;