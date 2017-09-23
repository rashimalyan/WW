import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import LogupScreen from './App/Components/Logup';
import SigninScreen from './App/Components/Signin';
import DsScreen from './App/Components/Ds';

export default StackNavigator({
  Logup: {screen: LogupScreen},
},
{
Signin: {screen: SigninScreen},
},
{
	Ds: {screen: DsScreen},
},
);