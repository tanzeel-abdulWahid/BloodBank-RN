import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'native-base'
import Login from '../screens/Login';
import Register from '../screens/Register';
import Policy from "../screens/Policy";
import Donors from '../screens/Donors';
import Finddonors from "../screens/Finddonors"
const Stack = createStackNavigator();

function Navigation() {
        return (
            <NavigationContainer>
                <Stack.Navigator  screenOptions={{
            headerStyle: {
            backgroundColor: '#EA2027',
            },
            headerTintColor: '#fff',
        }}>
                    <Stack.Screen name="Login" component={Login}  />
                    <Stack.Screen name="Finddonors" component={Finddonors} />
                    <Stack.Screen name="Donors" component={Donors} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Policy" component={Policy} />

                </Stack.Navigator>
                </NavigationContainer>
            );
    }

    export default Navigation;