import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native'

import HomeIndex from './Page/Home/Index';
import HomeDetail from './Page/Home/Detail';
import SettingsIndex from './Page/Setting/Index'
import SettingsDetail from './Page/Setting/Detail'
import StoresIndex from './Page/Store/Index'
import StoresDetail from './Page/Store/Detail'


const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeIndex} />
            <HomeStack.Screen name="Details" component={HomeDetail} />
        </HomeStack.Navigator>
    );
}

const SettingStack = createStackNavigator();
function SettingStackScreen() {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Ayarlar" component={SettingsIndex} />
            <SettingStack.Screen name="Details" component={SettingsDetail} />
        </SettingStack.Navigator>
    );
}

const StoreStack = createStackNavigator();
function StoreStackScreen() {
    return (
        <StoreStack.Navigator>
            <StoreStack.Screen name="Dükkanlar" component={StoresIndex} />
            <StoreStack.Screen name="Details" component={StoresDetail} />
        </StoreStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Ayarlar" component={SettingStackScreen} />
                <Tab.Screen name="Dükkanlar" component={StoreStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

