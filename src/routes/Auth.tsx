import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../pages/Preload';
import ChooseOptions from '../pages/ChooseOptions';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUp2 from '../pages/SignUp2';
import TabTatuador from './TabTatuador';
import DashUser from '../pages/DashUser';

const Stack = createStackNavigator();

const AuthRoutes: FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="ChooseOptions" component={ChooseOptions} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUp2" component={SignUp2} />
    <Stack.Screen name="DashTatuador" component={TabTatuador} />
    <Stack.Screen name="DashUser" component={DashUser} />
  </Stack.Navigator>
);

export default AuthRoutes;
