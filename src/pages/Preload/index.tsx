import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';

import Logo from '../../assets/Logo/logo.png';

import { Container } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChooseOptions');
    }, 4000);
  }, [navigation]);

  return (
    <Container>
      <StatusBar backgroundColor="#be2be3" barStyle="light-content" />
      <Image source={Logo} />
    </Container>
  );
};

export default Preload;
