import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Logo2 from '../../assets/Logo2/Logo.png';

import Bottom from '../../assets/BottomEffect/BottomEffect.png';
import Top from '../../assets/TopEffect/TopEffect.png';

import {
  Container,
  LogoTop,
  LogoBottom,
  ContainerLogoTop,
  Content,
  Button,
  ButtonTitle,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerLogoTop>
        <LogoTop source={Top} />
      </ContainerLogoTop>
      <Content>
        <Image source={Logo2} />
        <Button>
          <ButtonTitle
            onPress={() => {
              navigation.navigate('SignIn', {
                user: 'User',
              });
            }}
          >
            USUÁRIO
          </ButtonTitle>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('SignIn', {
              user: 'Tatuador',
            });
          }}
        >
          <ButtonTitle>TATUADOR</ButtonTitle>
        </Button>
      </Content>
      <LogoBottom source={Bottom} />
    </Container>
  );
};

export default SignIn;
