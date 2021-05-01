import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            tabStyle:{
                backgroundColor:'#000'
            },
            activeTintColor:'#fff'
        }}>
            <Tab.Screen
                 name={'Home'}
                 component={Home}
                 options={{
                     tabBarIcon:({color}) => (
                        <Entypo name={'home'}
                                size={25}
                                color={color}
                        />
                     )
                 }}
            />
            <Tab.Screen
                 name={'Search'}
                 component={Home}
                 options={{
                     tabBarIcon:({color}) => (
                        <AntDesign name={'search1'}
                                size={25}
                                color={color}
                        />
                     )
                 }}
            />
            <Tab.Screen
                 name={'Upload'}
                 component={Home}
                 options={{
                     tabBarIcon:({color}) => (
                        <Image source={plusIcon}
                               style={{height:35, resizeMode:'contain'}}
                        />
                     ),
                     tabBarLabel:() => null,
                 }}
            />
            <Tab.Screen
                 name={'Inbox'}
                 component={Home}
                 options={{
                     tabBarIcon:({color}) => (
                        <MaterialComunityIcons name={'message-minus-outline'}
                                size={25}
                                color={color}
                        />
                     )
                 }}
            />
            <Tab.Screen
                 name={'Profile'}
                 component={Home}
                 options={{
                     tabBarIcon:({color}) => (
                        <Ionicons name={'person-outline'}
                                size={25}
                                color={color}
                        />
                     )
                 }}
            />
            
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;