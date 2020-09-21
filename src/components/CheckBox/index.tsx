import React, { FC } from 'react';

import { Container, ButtonCheck, Label, Icon } from './styles';

export interface CheckBoxProps {
  label: string;
  onChange: () => void;
  value?: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({
  label,
  onChange,
  value,
}: CheckBoxProps) => (
  <Container>
    <ButtonCheck onPress={onChange} checked={value}>
      {value && <Icon />}
    </ButtonCheck>
    <Label>{label}</Label>
  </Container>
);

export default CheckBox;
