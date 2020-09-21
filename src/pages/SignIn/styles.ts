import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const ListraPreta = styled.View`
  height: 46px;
  background: #353535;
  border-bottom-width: 5px;
  border-bottom-color: #be2be3;
`;

export const TitleText = styled.Text`
  margin-top: 28px;
  font-size: 24px;
  color: #454545;
  height: 73px;
`;

export const SubTextTitle = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Content = styled.View`
  margin: 0 43px 0 12px;
`;

export const BottomView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;

  z-index: -2;
`;

export const LogoBottom = styled.Image``;

export const Button = styled.TouchableOpacity`
  background: #be2be3;
  margin-top: 23px;
  margin-left: 12px;
  margin-right: 12px;
  z-index: 1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;

export const ButtonBackOff = styled.TouchableOpacity`
  margin-top: 19px;
  justify-content: center;
`;

export const ButtonBackOffText = styled.Text``;

export const ButtonContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const InputContent = styled.View`
  margin: 0 12px;
`;
