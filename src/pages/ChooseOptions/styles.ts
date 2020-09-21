import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerLogoTop = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const LogoTop = styled.Image``;

export const LogoBottom = styled.Image``;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: #be2be3;
  margin: 16px;
  width: 60%;
  z-index: 1;
`;

export const ButtonTitle = styled.Text`
  color: #000;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;
