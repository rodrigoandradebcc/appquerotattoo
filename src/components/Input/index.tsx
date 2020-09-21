import React from 'react';

import { Container, Text, TextInput } from './styles';

interface InputDTO {
  title: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputDTO> = ({
  title,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
