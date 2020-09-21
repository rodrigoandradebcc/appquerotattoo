import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface CheckBoxProps {
  checked?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonCheck = styled.TouchableOpacity<CheckBoxProps>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${props => (props.checked ? '#be2be3' : '#e6e6f0')};
  background-color: ${props => (props.checked ? '#be2be3' : '#fff')};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-family: 'Poppins-Regular';
  color: #999999;
  font-size: 14px;
  line-height: 24px;
`;

export const Icon = styled(Feather).attrs(() => ({
  name: 'check',
  color: '#fff',
}))``;
