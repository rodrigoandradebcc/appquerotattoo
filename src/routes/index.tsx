import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './Auth';

const Routes: FC = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);

export default Routes;
