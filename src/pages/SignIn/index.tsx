import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Input from '../../components/Input';
import Bottom from '../../assets/BottomLoginEffect/image.png';

import {
  Container,
  ListraPreta,
  TitleText,
  SubTextTitle,
  LogoBottom,
  BottomView,
  Content,
  Button,
  ButtonText,
  ButtonBackOff,
  ButtonBackOffText,
  ButtonContent,
  InputContent,
} from './styles';

const SignIn: React.FC = () => {
  const {
    params: { user },
  } = useRoute();

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="#353535" barStyle="light-content" />
      <ListraPreta />
      <Content>
        <TitleText>Faça o login para conseguir acessar sua conta</TitleText>
        <SubTextTitle>
          Coloque um login e senha mesmo que não tenha conta, iremos criar uma
          para você.
        </SubTextTitle>
      </Content>

      <InputContent>
        <Input title="Login" placeholder="Ex: email, nome do usuário..." />
        <Input title="Senha" secureTextEntry placeholder="Senha..." />
      </InputContent>
      <Button
        onPress={() => {
          if (user === 'Tatuador') {
            navigation.navigate('DashTatuador');
          } else {
            navigation.navigate('DashUser');
          }
        }}
      >
        <ButtonText>Entrar</ButtonText>
      </Button>
      <ButtonContent>
        <ButtonBackOff>
          <ButtonBackOffText>Esqueci a senha</ButtonBackOffText>
        </ButtonBackOff>
        <ButtonBackOff
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <ButtonBackOffText>Não tem conta? Crie agora a sua</ButtonBackOffText>
        </ButtonBackOff>
      </ButtonContent>
      <BottomView>
        <LogoBottom source={Bottom} />
      </BottomView>
    </Container>
  );
};

export default SignIn;
