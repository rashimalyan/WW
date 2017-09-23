import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './App/Components/Login';
import SigninScreen from './App/Components/Signin';
import DsScreen from './App/Components/Ds';

export default StackNavigator({
  Login: {screen: LoginScreen},
},
{
Signin: {screen: SigninScreen},
},
{
	Ds: {screen: DsScreen},
},
);