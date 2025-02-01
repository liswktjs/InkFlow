import styled from '@emotion/native';

export const Container = styled.View`
  align-items: center;
`;

export const CustomTitle = styled.Text`
  text-align: center;
  font-size: 22px;

  width: 50%;

  color: ${(props) => props.theme.colors.primary};
`;
