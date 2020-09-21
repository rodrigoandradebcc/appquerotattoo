import styled from 'styled-components/native';

export const Container = styled.View`
  height: 89px;
  background: #f2f2f2;
  margin-top: 23px;
  padding-left: 5px;
  padding-top: 3px;
`;

export const Text = styled.Text`
  color: #666666;
  font-size: 12px;
  margin-top: 21px;
`;

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderColor: '#666',
}))`
  font-size: 12px;
`;
