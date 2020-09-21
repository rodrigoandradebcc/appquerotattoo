import React, { FC } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import DashTatuador from '../pages/DashTatuador';
import Leilao from '../pages/Leilao';
import Menu from '../pages/Menu';

const Tabs = createBottomTabNavigator();

const AuthRoutes: FC = () => (
  <Tabs.Navigator
    tabBarOptions={{
      tabStyle: {
        backgroundColor: '#353535',
      },
    }}
  >
    <Tabs.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={DashTatuador}
    />
    <Tabs.Screen
      name="Leilão"
      options={{
        tabBarIcon: ({ color, size }) => <Image />,
      }}
      component={Leilao}
    />
    <Tabs.Screen name="Menu" component={Menu} />
  </Tabs.Navigator>
);

export default AuthRoutes;
