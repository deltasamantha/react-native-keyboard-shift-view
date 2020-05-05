import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const RootStack = createStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={HomeScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}