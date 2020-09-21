import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from './styles';

const DashTatuador: React.FC = () => {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Text>Home Tatuador</Text>
    </Container>
  );
};

export default DashTatuador;
