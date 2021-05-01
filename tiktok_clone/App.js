/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';

import { withAuthenticator } from 'aws-amplify-react-native'
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {createUser} from './src/graphql/mutations';


const App: () => Node = () => {
  
  useEffect( () => {
    const fetchUser = async () => {
      const userinfo = await Auth.currentAuthenticatedUser({bypassCache:true})
      //console.log(userinfo);
      console.log("**");
    };
  }, []);


  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
        <RootNavigation />
    </SafeAreaView>
   
    </>
  );
};


export default withAuthenticator(App)