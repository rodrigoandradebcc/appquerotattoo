import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import {
  Container,
  ListraPreta,
  TitleText,
  Content,
  Button,
  ButtonText,
  InputContent,
} from './styles';
import CheckBox from '../../components/CheckBox';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <StatusBar backgroundColor="#353535" barStyle="light-content" />
      <ListraPreta />
      <Content>
        <TitleText>Somente alguns dados a mais</TitleText>
      </Content>

      <InputContent>
        <Input title="Seu Nome" placeholder="Ex: email, nome do usuário..." />
        <Input title="CPF/CNPJ" placeholder="000.000.000-00" />
        <Input title="Telefone" placeholder="(00) 0 0000-0000" />
        <CheckBox
          label="Li e concordo com os termos de uso e política de
          privacidade."
          onChange={() => {
            if (checked) {
              setChecked(false);
            } else {
              setChecked(true);
            }
          }}
          value={checked}
        />
      </InputContent>
      <Button
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      >
        <ButtonText>Concluir</ButtonText>
      </Button>
    </Container>
  );
};

export default SignUp;
