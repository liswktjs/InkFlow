import styled from '@emotion/native';

export const Container = styled.View`
  align-items: center;
  width: 50%;
`;

export const CustomTitle = styled.Text`
  text-align: center;
  font-size: 22px;

  color: ${(props) => props.theme.colors.primary};
`;
